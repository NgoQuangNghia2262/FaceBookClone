async function fetchData(coursAPI, data) {
  try {
    const response = await fetch(coursAPI, data);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function TopItem(post) {
  const user = await post.getUser();
  return 0;
}
function CenterItem(post) {
  return 0;
}
async function BotItem(post) {
  const likeCommentShare = await Promise.all([
    post.CountLike(),
    post.CountComment(),
    post.CountShare(),
    post.isLikedByUser(2),
  ]);
  return likeCommentShare;
}
async function loadPostItem(posts) {
  for (let index = 0; index < posts.length; index++) {
    let post = new Post(posts[index]);
    const item = await Promise.all([
      TopItem(post),
      CenterItem(post),
      BotItem(post),
    ]);
    console.log(item);
  }
}

async function main() {
  const api = `http://localhost:8000/data/api/post/trang?id=0`;
  let posts = await fetchData(api);
  loadPostItem(posts);
}
main();
