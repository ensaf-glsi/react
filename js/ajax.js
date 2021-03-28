// function ajax(url, options) {
//     options = options || {};
//     var json = options.json || true;
//     var response = fetch(url, options);
//     if (json) {
//         return response.then(resp => resp.json());
//     }
//     return response;
// }
// axios
async function ajax(url, options) {
  options = options || {};
  var json = options.json || true;
  var response = await fetch(url, options);
  if (json) {
    return response.json();
  }
  return response;
}
function getCommentById(commentId) {
  return ajax(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
}
function getPostById(postId) {
  return ajax(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}
function getUserById(userId) {
  return ajax(`https://jsonplaceholder.typicode.com/users/${userId}`);
}

async function getUserFromComment(commentId) {
  var comment = await getCommentById(commentId);
  var post = await getPostById(comment.postId);
  var user = await getUserById(post.userId);
  console.log("user : ", user);
  return user;
}

var user = getUserFromComment(1).then((user) => {
  console.log("user from window ", user);
});

console.log("promesse : ", user);
