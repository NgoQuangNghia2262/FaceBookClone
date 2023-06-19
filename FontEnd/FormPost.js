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
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function TopItem(post) {
  const userProfile = await post.getUser();
  await delay(3000);
  return ` <div class="Post-Item-Top">
      <div style="display: flex">
        <div>
          <a href="">
            <img src="${userProfile.Img}" alt="" />
          </a>
        </div>
        <div>
          <h4>${userProfile.Name}</h4>
          <p>Được tài trợ</p>
        </div>
      </div>
      <div>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          width="1em"
          height="1em"
          style="font-size: 22px; color: #65676b; margin-right: 10px"
        >
          <g fill-rule="evenodd" transform="translate(-446 -350)">
            <path
              d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
            ></path>
          </g>
        </svg>
      </div>
    </div>`;
}
async function CenterItem(post) {
  await delay(2000);
  return `
  <div class="Post-Item-Center">
  <div class="Content" style="padding: 5px 15px">
    <p style="line-height: 20px">${post.Content}</p>
  </div>
  <div class="images">
    <a href="">
      <img src="${post.Img}" alt="" />
    </a>
  </div>
</div>`;
}
function clickLike(elementLike) {
  console.log("Hi");
  // var parentElement = elementLike.parentNode.parentNode.firstElementChild;
  // var element = parentElement.firstElementChild.children[1];
  // var like = element.innerHTML.trim();
  // if (elementLike.className === "activateLike") {
  //   elementLike.className = "Like";
  //   element.textContent = like === 1 ? "" : --like;
  //   post.DeleteLike(localStorage.getItem("username"));
  // } else {
  //   post.AddLike(localStorage.getItem("username"));
  //   elementLike.className = "activateLike";
  //   element.textContent = like === 0 ? 1 : ++like;
  // }
}
async function BotItem(post) {
  const likeCommentShare = await Promise.all([
    post.CountLike(),
    post.CountComment(),
    post.CountShare(),
  ]);
  //Phải tách promies này ra vì hình như nó xayra hiện tượng look table bên DB
  //Hiện tượng này dẫn đến câu truy vấn bị hủy
  //3 cái trên cũng bị như vậy nhưng tần số rất ít
  const isLike = await post.isLikedByUser(username);
  await delay(2000);
  return ` <div class="Post-Item-Bot">
  <div class="Post-Item-Bot_Container">
    <div class="Header">
      <div class="Header_Left">
        <img src="./images/like.svg" alt="" />
        <span> ${likeCommentShare[0] ? `${likeCommentShare[0]}` : ``}</span>
       
      </div>
      <div class="Header_Right">
        ${
          likeCommentShare[2]
            ? `<span style="margin-left : 10px;">${likeCommentShare[2]} lượt chia sẻ</span>`
            : ``
        }
        ${
          likeCommentShare[1]
            ? `<span>${likeCommentShare[1]} bình luận</span>`
            : ``
        }
      </div>
    </div>
    <div class="Fotter">
      <div class="${isLike ? "activateLike" : "Like"}">
        <i></i>
        <span>Thích</span>
      </div>
      <div class="Comment">
        <i
          style="
            background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/cPbPIy60-oB.png');
            background-position: 0px -366px;
            background-size: 26px 874px;
            width: 18px;
            height: 18px;
            background-repeat: no-repeat;
            display: inline-block;
          "
        ></i>
        <span>Bình luận</span>
      </div>
      <div class="Share">
        <i
          style="
            background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/cPbPIy60-oB.png');
            background-position: 0px -426px;
            background-size: 26px 874px;
            width: 18px;
            height: 18px;
            background-repeat: no-repeat;
            display: inline-block;
          "
        ></i>
        <span>Chia sẻ</span>
      </div>
    </div>
  </div>
</div>`;
}
async function loadPostItem(posts) {
  let mainWebContent_button = document.querySelector("#btn_XemThem");
  mainWebContent_button.className = "displaynone";
  let preload = document.querySelector("#ListPost_PreLoad");
  preload.style.display = "block";
  for (let index = 0; index < posts.length; index++) {
    let post = new Post(posts[index]);
    const item = await Promise.all([
      TopItem(post),
      CenterItem(post),
      BotItem(post),
    ]);
    var root = document.querySelector("#ListPost");
    const newElement = document.createElement("div");
    newElement.className = "Post-Item";
    newElement.innerHTML = item.join("");
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
  let friends = await fetchData(
    `http://localhost:8000/friendship?id=${username}`
  );
  LoadFriend(friends);
  let userProfile = await fetchData(
    `http://localhost:8000/Profile/findone?id=${username}`
  );
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
