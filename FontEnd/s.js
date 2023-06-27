import { HeaderLayout } from "./HTML_Element/Layout/Header/Header.js";
import { WebContent_Center } from "./HTML_Element/Layout/WebContent/Center/WebContent_Center.js";
import User from "./DTO/User.js";
import Post, { PostController } from "./DTO/Post.js";
import { finallyPost } from "./HTML_Element/Post.js";

async function loadPostItem(posts) {
  var root = document.querySelector("#ListPost");

  for (let index = 0; index < posts.length; index++) {
    let post = new Post(posts[index]);
    const newElement = await finallyPost(post);
    root.appendChild(newElement);
  }
}
async function main() {
  const obj = {
    Img: "z",
    Name: "Tui Ten Nghia",
    BirthDay: "BirthDay",
    Phone: "0342534443",
    Address: "Hưng Yên",
  };
  const user = new User(obj);
  const root = document.querySelector(".root");
  root.appendChild(HeaderLayout(user));
  const center = document.querySelector("main");
  WebContent_Center(user);
  const item = await PostController.getPost(0);
  loadPostItem(item);
}
main();
