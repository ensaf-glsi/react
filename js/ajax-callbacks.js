function ajax(url, options) {
  var http = new XMLHttpRequest();
  var json = options.json || true;
  http.open(options.method || "GET", url, true);
  if (options.headers) {
    for (let [key, value] of Object.entries(options.headers)) {
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
        options.error && options.error(http);
      } else if (http.status >= 400) {
        console.warn("error client ? ", http);
        if (options.error) {
          options.error(http);
        }
      } else {
        // console.log("succes : ", http.responseText);
        var result = http.responseText;
        if (json) {
          result = JSON.parse(result);
        }
        options.succes(result);
      }
    }
  };
  http.send();
}

// ajax("https://jsonplaceholder.typicode.com/users/1", {
//   //   //   method: "get",
//   //   headers: {
//   //     Authorization: "Bearer wojiefj weoifj owefjweoifjow",
//   //     "Content-Type": "application/json",
//   //   },
//   succes: function (response) {
//     console.log("ma reponse : ", response);
//   },
// });
var postId;

function getUserByPost(post) {
  ajax(`https://jsonplaceholder.typicode.com/users/${post.userId}`, {
    succes: function (response) {
      console.log("user  : ", response);
    },
  });
}
function getCommentById(id) {
  ajax("https://jsonplaceholder.typicode.com/comments/" + id, {
    succes: function (response) {
      postId = response.postId;
      console.log("post id : ", response.postId);
      getPostById(postId, getUserByPost);
    },
  });
}
function getPostById(postId, callback) {
  ajax(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    succes: function (response) {
      console.log("post  : ", response);
      callback(response);
    },
  });
}
getCommentById(1);
// https://jsonplaceholder.typicode.com/comments/1
// {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   }
// https://jsonplaceholder.typicode.com/posts/${postId}
// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   }
// https://jsonplaceholder.typicode.com/users/${userId}
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }
