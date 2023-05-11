var username = localStorage.getItem("username");

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

async function getData(callback, coursAPI) {
  fetch(coursAPI)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      callback(res);
    });
}
async function fetchData(coursAPI, data) {
  try {
    const response = await fetch(coursAPI);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function loadPostItem(posts) {
  posts.forEach(async (post) => {
    var user = await fetchData(
      `http://localhost:8000/Profile/findone?id=${post.ProfileID}`
    );
    var Bot = await BotItem(post);
    var postItem = TopItem(user[0]) + CenterItem(post) + Bot;
    var root = document.querySelector("#ListPost");
    const newElement = document.createElement("div");
    newElement.className = "Post-Item";
    newElement.innerHTML = postItem;
    root.appendChild(newElement);
  });
}

function TopItem(userProfile) {
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
function CenterItem(post) {
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

function clickLike(elementLike, obj) {
  const data = {
    postId: obj.postId,
    userId: obj.userId,
  };
  var parentElement = elementLike.parentNode.parentNode.firstElementChild;
  var element = parentElement.children[0].children[1];
  var like = element.innerHTML.trim();
  if (elementLike.className === "activateLike") {
    elementLike.className = "Like";
    element.textContent = --like;
    fetch("http://localhost:8000/data/api/post/delete/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else {
    fetch("http://localhost:8000/data/api/post/add/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    elementLike.className = "activateLike";
    element.textContent = ++like;
  }
  console.log(data);
}

async function BotItem(post) {
  const like = await fetchData(
    `http://localhost:8000/data/api/post/countLike/${post.Id}`
  );
  const comment = await fetchData(
    `http://localhost:8000/data/api/post/countComment/${post.Id}`
  );
  const share = await fetchData(
    `http://localhost:8000/data/api/post/countShare/${post.Id}`
  );
  const wasLike = await fetchData(
    `http://localhost:8000/data/api/post/waslike/?postId=${post.Id}&userId=${username}`
  );
  console.log(wasLike);
  return ` <div class="Post-Item-Bot">
  <div class="Post-Item-Bot_Container">
    <div class="Header">
      <div class="Header_Left">
        <img src="./images/like.svg" alt="" />
        ${like[0].countLike ? `<span">${like[0].countLike}</span>` : ``}
      </div>
      <div class="Header_Right">
        ${
          share[0].countShare
            ? `<span style="margin-left : 10px;">${share[0].countShare} lượt chia sẻ</span>`
            : ``
        }
        ${
          comment[0].countComment
            ? `<span>${comment[0].countComment} bình luận</span>`
            : ``
        }
      </div>
    </div>
    <div class="Fotter">
      <div onclick="clickLike(this , {postId : '${
        post.Id
      }' , userId : ${username}});"  class="${
    wasLike[0] ? "activateLike" : "Like"
  }">
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
async function LoadPost(Posts) {
  var profile = new Profile();
  var content = profile.getName();
  console.log(content);
}
function Start() {
  BlurFor_header_search_input();
  getData(LoadFriend, `http://localhost:8000/friendship?id=${username}`);
  getData(Load, `http://localhost:8000/Profile/findone?id=${username}`);
  getData(loadPostItem, `http://localhost:8000/data/api/post/trang?id=0`);
}
Start();
var trang = 1;
window.addEventListener("scroll", function () {
  // Kiểm tra khi nào người dùng kéo đến cuối trang
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    loadMorePosts(trang);
    trang++;
  }
});

function loadMorePosts(trang) {
  setTimeout(() => {
    getData(
      loadPostItem,
      `http://localhost:8000/data/api/post/trang?id=${trang}`
    );
  }, 2000);
}
