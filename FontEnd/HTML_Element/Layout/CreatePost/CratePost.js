import { CircleLoad } from "../Loader/CircleLoading.js";
async function fetchData(coursAPI, data) {
  try {
    const response = await fetch(coursAPI, data);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
const Close = () => {
  const div = document.createElement("div");
  div.style = `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
    z-index: 999;
  `;
  div.innerHTML = `
    <i
    style="
      background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/xp7hCZ-2B5Z.png');
      background-position: -132px -88px;
      background-size: 190px 172px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      float: right;
    "
  ></i>
  `;
  div.addEventListener("click", () => {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
      const parent = overlay.parentElement;
      parent.removeChild(overlay);
    }
  });
  return div;
};
export const FormCreatePost = (User) => {
  const container = document.createElement("div");
  container.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2); 
    z-index: 9999; 
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  container.className = "overlay";
  const formCreatePost = document.createElement("div");
  formCreatePost.className = "FormCreatePost";
  formCreatePost.style = `
    width: 500px;
    background-color: #fff;
    position: absolute;
    top: 5%;
    left: 33%;
    border-radius: 10px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);
  `;
  formCreatePost.appendChild(CratePost.Top());
  formCreatePost.appendChild(CratePost.User(User));
  formCreatePost.appendChild(CratePost.Content(User));
  formCreatePost.appendChild(CratePost.ListIcon());
  formCreatePost.appendChild(CratePost.button());

  container.appendChild(formCreatePost);
  return container;
};
export const CratePostLayout = (User) => {
  const CreatePostElement = document.createElement("div");
  CreatePostElement.className = "CratePost";
  CreatePostElement.innerHTML = `
        <div class="CratePost_Top">
            <img src="${User.Img}" />
            <input type="text" placeholder="${User.Name} ơi , Bạn đang nghĩ gì thế ?" />
        </div>
        <div class="CratePost_Bot">
          <div class="CratePost_Bot-Item">
            <img src="../images/v1iF2605Cb5.png" width="24px" height="24px" />
            <span>Video trực tiếp</span>
          </div>
          <div class="CratePost_Bot-Item">
            <img src="../images/a6OjkIIE-R0.png" width="24px" height="24px" />
            <span>Ảnh/Video</span>
          </div>
          <div class="CratePost_Bot-Item">
            <img src="../images/yMDS19UDsWe.png" width="24px" height="24px" />
            <span>Cảm xúc/Hoạt động</span>
          </div>
        </div>
  `;

  const elemetInput = CreatePostElement.querySelector(".CratePost_Top input");
  elemetInput.addEventListener("click", () => {
    document.body.appendChild(FormCreatePost(User));
  });
  return CreatePostElement;
};

export const CratePost = {
  Top: () => {
    const div = document.createElement("div");
    div.style = `
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 15px;
      position: relative;
    `;
    div.innerHTML = `
      <h2>Tạo bài viết</h2>
    `;
    div.appendChild(Close());
    return div;
  },
  User: (User) => {
    console.log(User);
    const div = document.createElement("div");
    div.className = "FormCreatePost_User";
    div.innerHTML = `
    <div>
      <a href="">
      <img src="${User.Img}" />
      </a>
    </div>
          <div>
            <h4>${User.Name}</h4>
            <div style="position: relative">
              <div
                id="the_object_of_the_article"
                class="the_object_of_the_article"
              >
                <img
                  style="width: 12px; height: 12px"
                  src="../images/bXBYraHyR0S.png"
                />
                <span>Chỉ mình tôi</span>
                <i
                  style="
                    background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/xp7hCZ-2B5Z.png');
                    background-position: -124px -154px;
                    background-size: 190px 172px;
                    width: 12px;
                    height: 12px;
                    background-repeat: no-repeat;
                    float: right;
                  "
                ></i>
              </div>
          </div>
    `;
    return div;
  },
  Content: (User) => {
    const div = document.createElement("div");
    div.className = `FormCreatePost_Content`;
    div.innerHTML = `
    <textarea placeholder="${User.Name} ơi, bạn đang nghĩ gì thế ?"></textarea>
    <div style = "display : none;" class="FormCreatePost_Content_UpLoad" id="FormCreatePost_Content_UpLoad">
            <div class="FormCreatePost_Content_UpLoad-Top">
              <img src="" />
              <input type="file" name="file" />
              <div class="UpLoad-Top-icon">
                <i
                  style="
                    background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/S2RzBqcwbI-.png');
                    background-position: 0px -86px;
                    background-size: 38px 162px;
                    width: 20px;
                    height: 20px;
                    background-repeat: no-repeat;
                    display: inline-block;
                  "
                >
                </i>
              </div>
              <h3>Thêm ảnh/Video</h3>
              <span>hoặc kéo và thả</span>
              <div class="close_FormCreatePost_Img">
                <i
                  style="
                    background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/xp7hCZ-2B5Z.png');
                    background-position: -132px -88px;
                    background-size: 190px 172px;
                    width: 20px;
                    height: 20px;
                    background-repeat: no-repeat;
                    float: right;
                  "
                ></i>
              </div>
            </div>
          </div>
    <div class="FormCreatePost_Content-item">
            <img
              style="width: 38px; height: 38px"
              src="../images/SATP_Aa_square-2x.png"
            />
            <i
              style="
                height: 24px;
                width: 24px;
                background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/EZ2M5Z2ETSf.png');
                background-position: 0px -112px;
                background-size: 34px 446px;
                background-repeat: no-repeat;
                display: inline-block;
              "
            ></i>
          </div>
    `;
    let FormCreatePost_Content_UpLoad = div.querySelector(
      ".FormCreatePost_Content_UpLoad"
    );
    let FormCreatePost_Content_UpLoad_Input = div.querySelector(
      ".FormCreatePost_Content_UpLoad input"
    );
    let FormCreatePost_Content_UpLoad_Img = div.querySelector(
      ".FormCreatePost_Content_UpLoad img"
    );
    let close_FormCreatePost_Img = div.querySelector(
      ".close_FormCreatePost_Img"
    );
    let textarea = div.querySelector("textarea");
    textarea.addEventListener("input", () => {
      let button = document.querySelector("#buttonCreatePost");
      if (textarea.value) {
        button.className = "activate";
      } else {
        button.className = "nonactivate";
      }
    });
    FormCreatePost_Content_UpLoad.addEventListener("click", () => {
      FormCreatePost_Content_UpLoad_Input.click();
    });
    FormCreatePost_Content_UpLoad_Input.addEventListener("change", () => {
      FormCreatePost_Content_UpLoad_Img.src = URL.createObjectURL(
        FormCreatePost_Content_UpLoad_Input.files[0]
      );
    });
    close_FormCreatePost_Img.addEventListener("click", (event) => {
      event.stopPropagation();
      FormCreatePost_Content_UpLoad.style.display = "none";
    });
    return div;
  },
  ListIcon: () => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div
      style="
              display: flex;
              justify-content: space-around;
              align-items: center;
              border: 1px solid #ced0d4;
              height: 57px;
              border-radius: 8px;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            "
          >
            <span style="font-size: 14px; color: #050505; font-weight: 600"
              >Thêm vào bài viết của bạn</span
            >
      <div class="FormCreatePost_ListIcon">
            <img class="upload" src="../images/a6OjkIIE-R0.png" />
            <img src="../images/MqTJr_DM3Jg.png" />
            <img src="../images/yMDS19UDsWe.png" />
            <img src="../images/uywzfiZad5N.png" />
            <img src="../images/j0Jp-GpONWx.png" />
            <i
              data-visualcompletion="css-img"
              class="x1b0d499 xl1xv1r"
              style="
                height: 24px;
                width: 24px;
                background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/S2RzBqcwbI-.png');
                background-position: 0px -38px;
                background-size: 38px 162px;
                background-repeat: no-repeat;
                display: inline-block;
              "
            ></i>
          </div>
    `;
    const upload = div.querySelector(".upload");
    upload.addEventListener("click", () => {
      const FormCreatePost_Content_UpLoad = document.querySelector(
        "#FormCreatePost_Content_UpLoad"
      );
      FormCreatePost_Content_UpLoad.style.display = "block";
    });
    return div;
  },
  button: () => {
    const wrapButton = document.createElement("div");
    wrapButton.id = "buttonCreatePost";
    wrapButton.className = "nonactivate";
    wrapButton.innerHTML = `<button type="button">Đăng</button>`;
    wrapButton.style = `
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    const button = wrapButton.querySelector("button");
    button.addEventListener("click", async (event) => {
      if (wrapButton.className === "activate") {
        event.preventDefault();
        let body = document.querySelector("body");
        body.appendChild(CircleLoad());
        let textareaFormCreatePost = document.querySelector(
          ".FormCreatePost_Content textarea"
        );
        let FormCreatePost_Content_UpLoad_Input = document.querySelector(
          ".FormCreatePost_Content_UpLoad input"
        );
        const formData = new FormData();
        formData.append("", FormCreatePost_Content_UpLoad_Input.files[0]);
        const pathimg = await fetchData(
          "http://localhost:8000/data/api/post/upload_img",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = {
          UserID: localStorage.getItem("username"),
          pathimg: pathimg,
          content: textareaFormCreatePost.value,
          category: "Post",
        };
        //---------------------------------------------------------------------------------------------------------
        await fetchData("http://localhost:8000/data/api/post/createpost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const circleLoad = body.querySelector(".CircleLoad");
        body.removeChild(circleLoad);
        const overlay = body.querySelector(".overlay");
        body.removeChild(overlay);
      }
    });
    return button;
  },
};
