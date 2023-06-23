import { postElement, finallyPost } from "../HTML_Element/Post.js";
import { FriendElement } from "../HTML_Element/Friend.js";
import Friend, { FriendController } from "../DTO/Friend.js";
import User from "../DTO/User.js";
import Post, { PostController } from "../DTO/Post.js";
import { HeaderLayout } from "../HTML_Element/Layout/Header/Header.js";

var username = localStorage.getItem("username");
async function loadPostItem(posts) {
  var root = document.querySelector("#ListPost");
  let mainWebContent_button = document.querySelector("#btn_XemThem");
  mainWebContent_button.className = "displaynone";
  let preload = document.querySelector("#ListPost_PreLoad");
  preload.style.display = "block";
  for (let index = 0; index < posts.length; index++) {
    let post = new Post(posts[index]);
    const newElement = await finallyPost(post);
    root.appendChild(newElement);
  }
}
function Load(userProfile) {
  var img = document.querySelector("#AnhDaiDien");
  var img2 = document.querySelector("#AnhDaiDien2");
  var name = document.querySelector("#Name2");
  var elementInputCreatePost = document.querySelector(
    ".CratePost .CratePost_Top input"
  );
  var src = userProfile[0].Img.trim();
  img.src = src;
  img2.src = src;
  name.textContent = userProfile[0].Name;
  elementInputCreatePost.placeholder = `${userProfile[0].Name} ơi , Bạn đang nghĩ gì thế ?`;
}
function LoadFriend(friends) {
  var root = document.querySelector("#list-friend");
  friends.forEach((friend) => {
    const newElement = FriendElement.element(friend);
    root.appendChild(newElement);
  });
}
let trang = 1;
async function loadMorePosts(trang) {
  let posts = await PostController.getPost(trang);
  if (!posts) {
    return;
  }
  loadPostItem(posts)
    .then()
    .catch()
    .finally(() => {
      let mainWebContent_button = document.querySelector("#btn_XemThem");
      mainWebContent_button.className = "";
      let preload = document.querySelector("#ListPost_PreLoad");
      preload.style.display = "none";
      trang++;
    });
}
async function main() {
  let body = document.querySelector("body");
  body.appendChild(HeaderLayout());
  let mainWebContent_button = document.querySelector("#btn_XemThem");
  mainWebContent_button.addEventListener("click", function () {
    loadMorePosts(trang);
  });
  const item = await Promise.all([
    await FriendController.getListFriendbyUsername(username),
    await User.FindOne(username),
    await PostController.getPost(0),
  ]);
  LoadFriend(item[0]);
  Load(item[1]);
  loadPostItem(item[2])
    .then()
    .catch()
    .finally(() => {
      let mainWebContent_button = document.querySelector("#btn_XemThem");
      mainWebContent_button.className = "";
      var preload = document.querySelector("#ListPost_PreLoad");
      preload.style.display = "none";
    });
}
main();
