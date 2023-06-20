import { postElement } from "./HTML_Element/Post.js";
import { FriendController } from "./DTO/Friend.js";
import { UserController } from "./DTO/User.js";
import Post, { PostController } from "./DTO/Post.js";

var username = localStorage.getItem("username");

async function fetchData(coursAPI, data) {
  try {
    const response = await fetch(coursAPI, data);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
function BlurFor_header_search_input() {
  var element = document.querySelector("#header_search_input");
  var history = document.querySelector(".HistorySearch");
  element.addEventListener("blur", function () {
    history.classList.add("displaynone");
  });
  element.addEventListener("focus", function () {
    history.classList.remove("displaynone");
  });
}

async function loadPostItem(posts) {
  let mainWebContent_button = document.querySelector("#btn_XemThem");
  mainWebContent_button.className = "displaynone";
  let preload = document.querySelector("#ListPost_PreLoad");
  preload.style.display = "block";
  for (let index = 0; index < posts.length; index++) {
    let post = new Post(posts[index]);
    const item = await Promise.all([
      postElement.TopItem(post),
      postElement.CenterItem(post),
      postElement.BotItem(post),
    ]);
    var root = document.querySelector("#ListPost");
    const newElement = document.createElement("div");
    newElement.className = "Post-Item";
    newElement.appendChild(item[0]);
    newElement.appendChild(item[1]);
    newElement.appendChild(item[2]);

    root.appendChild(newElement);
  }
}
function Load(userProfile) {
  var img = document.querySelector("#AnhDaiDien");
  var img2 = document.querySelector("#AnhDaiDien2");
  var img3 = document.querySelector(".header_Account_CaNhan-item1 img");
  var name = document.querySelector("#Name2");
  var elementname = document.querySelector(".header_Account_CaNhan-item1 span");
  var elementInputCreatePost = document.querySelector(
    ".CratePost .CratePost_Top input"
  );
  var src = userProfile[0].Img.trim();
  img.src = src;
  img2.src = src;
  img3.src = src;
  name.textContent = userProfile[0].Name;
  elementname.textContent = userProfile[0].Name;
  elementInputCreatePost.placeholder = `${userProfile[0].Name} ơi , Bạn đang nghĩ gì thế ?`;
}
function LoadFriend(friends) {
  var root = document.querySelector("#list-friend");
  friends.forEach((friend) => {
    const newElement = document.createElement("div");
    newElement.className = "Friend";
    newElement.innerHTML = `
        <img src="${friend.Img}" alt="" />
        <span>${friend.Name}</span>
    `;
    root.appendChild(newElement);
  });
}
let trang = 1;
async function loadMorePosts(trang) {
  let posts = await fetchData(
    `http://localhost:8000/data/api/post/trang?id=${trang}`
  );
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
    });
}
async function main() {
  let mainWebContent_button = document.querySelector("#btn_XemThem");
  mainWebContent_button.addEventListener("click", function () {
    loadMorePosts(trang);
    console.log(trang);
    trang++;
  });
  BlurFor_header_search_input();
  let friends = await FriendController.getListFriendbyUsername(username);
  LoadFriend(friends);
  let userProfile = await UserController.FindOne(username);
  Load(userProfile);
  let posts = await fetchData(`http://localhost:8000/data/api/post/trang?id=0`);
  loadPostItem(posts)
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
