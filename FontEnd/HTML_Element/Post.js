function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Like = (post, isLike) => {
  const html = `
    <i></i> 
    <span>Thích</span>
    `;
  const newElement = document.createElement("div");
  newElement.className = isLike ? "activateLike" : "Like";
  newElement.innerHTML = html;
  newElement.addEventListener("click", () => {
    let parentElement = newElement.parentNode.parentNode.firstElementChild;
    let element = parentElement.firstElementChild.children[1];
    let like = element.innerHTML.trim();
    if (newElement.className === "activateLike") {
      newElement.className = "Like";
      element.textContent = like === 1 ? "" : --like;
      post.DeleteLike(localStorage.getItem("username"));
    } else {
      post.AddLike(localStorage.getItem("username"));
      newElement.className = "activateLike";
      element.textContent = like === 0 ? 1 : ++like;
    }
  });
  return newElement;
};
const Comment = () => {
  const html = `
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
    `;
  const newElement = document.createElement("div");
  newElement.className = "Comment";
  newElement.innerHTML = html;
  return newElement;
};
const Share = () => {
  const html = `
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
    `;
  const newElement = document.createElement("div");
  newElement.className = "Share";
  newElement.innerHTML = html;
  return newElement;
};

export const postElement = {
  TopItem: async (post) => {
    const userProfile = await post.getUser();
    await delay(3000);
    const html = `
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
    </div>`;
    const newElement = document.createElement("div");
    newElement.className = "Post-Item-Top";
    newElement.innerHTML = html;
    return newElement;
  },
  CenterItem: async (post) => {
    await delay(2000);
    const html = `
    <div class="Content" style="padding: 5px 15px">
        <p style="line-height: 20px">${post.Content}</p>
    </div>
    <div class="images">
        <a href="">
            <img src="${post.Img}" alt="" />
        </a>
    </div>
    `;
    const newElement = document.createElement("div");
    newElement.className = "Post-Item-Center";
    newElement.innerHTML = html;
    return newElement;
  },
  BotItem: async (post) => {
    const likeCommentShare = await Promise.all([
      post.CountLike(),
      post.CountComment(),
      post.CountShare(),
    ]);
    //Phải tách promies này ra vì hình như nó xayra hiện tượng look table bên DB
    //Hiện tượng này dẫn đến câu truy vấn bị hủy
    //3 cái trên cũng bị như vậy nhưng tần số rất ít
    const isLike = await post.isLikedByUser(localStorage.getItem("username"));
    await delay(2000);
    const htmlTop = `
      <div class="Header_Left">
        <img src="../images/like.svg" alt="" />
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
  `;
    const newElement = document.createElement("div");
    newElement.className = "Post-Item-Bot";
    const newElementContainer = document.createElement("div");
    newElementContainer.className = "Post-Item-Bot_Container";
    const newElementTop = document.createElement("div");
    newElementTop.className = "Header";
    newElementTop.innerHTML = htmlTop;
    const newElementBot = document.createElement("div");
    newElementBot.className = "Fotter";

    newElementBot.appendChild(Like(post, isLike));
    newElementBot.appendChild(Comment());
    newElementBot.appendChild(Share());

    newElementContainer.appendChild(newElementTop);
    newElementContainer.appendChild(newElementBot);

    newElement.appendChild(newElementContainer);
    return newElement;
  },
};
