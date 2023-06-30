import { postElement, finallyPost } from "../HTML_Element/Post.js";
import { FriendElement } from "../HTML_Element/Friend.js";
import Friend, { FriendController } from "../DTO/Friend.js";
import User from "../DTO/User.js";
import Post, { PostController } from "../DTO/Post.js";
import { HeaderLayout } from "../HTML_Element/Layout/Header/Header.js";
import { WebContent_Center } from "../HTML_Element/Layout/WebContent/Center/WebContent_Center.js";
import { PreLoadPost } from "../HTML_Element/Layout/Loader/PreLoadPost.js";

var username = localStorage.getItem("username");
async function loadPostItem(posts) {
  let root = document.querySelector("#ListPost");
  let parent = root.parentElement;
  parent.appendChild(PreLoadPost());
  for (let index = 0; index < posts.length; index++) {
    let post = new Post(posts[index]);
    const newElement = await finallyPost(post);
    root.appendChild(newElement);
  }
}
function Load(userProfile) {
  var img2 = document.querySelector("#AnhDaiDien2");
  var name = document.querySelector("#Name2");
  var elementInputCreatePost = document.querySelector(
    ".CratePost .CratePost_Top input"
  );
  var src = userProfile.Img.trim();
  img2.src = src;
  name.textContent = userProfile.Name;
  elementInputCreatePost.placeholder = `${userProfile.Name} ơi , Bạn đang nghĩ gì thế ?`;
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
  let preLoad = root.querySelector("#ListPost_PreLoad");
  let posts = await PostController.getPost(trang);
  if (!posts | preLoad) {
    return;
  }
  loadPostItem(posts).finally(() => {
    let root = document.querySelector("#WebContent_Center");
    let preLoad = root.querySelector("#ListPost_PreLoad");
    root.removeChild(preLoad);
    trang++;
  });
}
async function main() {
  const item = await Promise.all([
    await FriendController.getListFriendbyUsername(username),
    await User.FindOne(username),
    await PostController.getPost(0),
  ]);
  let body = document.querySelector("body");
  body.appendChild(HeaderLayout(item[1]));
  LoadFriend(item[0]);
  await WebContent_Center(item[1]);
  loadPostItem(item[2]).finally(() => {
    let root = document.querySelector("#WebContent_Center");
    let preLoad = root.querySelector("#ListPost_PreLoad");
    root.removeChild(preLoad);
  });
}
main();
