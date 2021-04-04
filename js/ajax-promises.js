function ajax(url, options) {
  return new Promise((resolve, reject) => {
    var http = new XMLHttpRequest();
    options = options || {};
    var json = options.json || true;
    http.open(options.method || "GET", url, true);
    if (options.headers) {
      for (var [key, value] of Object.entries(options.headers)) {
        //   console.log(`${key}: ${value}`);
        http.setRequestHeader(key, value);
      }
    }
    http.onreadystatechange = function () {
      // console.log(http);
      // console.log("error callback : ", options.error);
      if (http.readyState === 4) {
        if (http.status >= 500) {
          console.warn("error serveur ? ", http);
          reject(http);
        } else if (http.status >= 400) {
          console.warn("error client ? ", http);
          reject(http);
        } else {
          // console.log("succes : ", http.responseText);
          var result = http.responseText;
          if (json) {
            result = JSON.parse(result);
          }
          //   console.log(result);
          resolve(result);
        }
      }
    };
    http.send();
  });
}

// fn().then(succes, error);
// fn()
//   .then(succes)
//   .catch(error)
//   .finally(() => {});

ajax("https://jsonplaceholder.typicode.com/comments/1")
  .then((comment) => {
    console.log("comment 1", comment);
    return ajax(`https://jsonplaceholder.typicode.com/posts/${comment.postId}`);
  })
  .then((post) => {
    console.log("post : ", post);
    return ajax(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  })
  .then((user) => {
    console.log("user : ", user);
  })
  .catch((error) => {
    console.warn("erreur : ", error);
  });
// var postId;

function getUserByPost(post) {
  ajax(`https://jsonplaceholder.typicode.com/users/${post.userId}`, {
    succes: function (response) {
      console.log("user  : ", response);
    },
  });
}
function getPostIdFromComment(id) {
  return ajax("https://jsonplaceholder.typicode.com/comments/" + id).then(
    function (response) {
      postId = response.postId;
      //   console.log("post id : ", response.postId);
      return postId;
    }
  );
}
getPostIdFromComment(1).then((pid) => {
  console.log("post id from comment ", pid);
});
