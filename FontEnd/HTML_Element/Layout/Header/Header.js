import { HistorySearchElement } from "../HistorySearch/HistorySearch.js";

function Create_Even_For_ElementInput_In_HeaderCenter(inputElement) {
  const root = inputElement.parentNode;
  inputElement.addEventListener("focus", () => {
    const arrUser = localStorage.getItem("HistorySearch");
    root.appendChild(HistorySearchElement.HistorySearch(JSON.parse(arrUser)));
  });
  inputElement.addEventListener("blur", () => {
    root.removeChild(root.childNodes[2]);
  });
  var timeoutId;
  inputElement.addEventListener("input", (event) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      var text = event.target.value;
    }, 1000);
  });
}
const Header_Right_Message = () => {
  const message = document.createElement("div");
  message.className = "Message";
  message.innerHTML = `
    <svg
    viewBox="0 0 28 28"
    class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0"
    fill="currentColor"
    height="20"
    width="20"
  >
      <path
        d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"
      ></path>
    </svg>
  `;
  message.style = `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #E4E6EB;
    cursor: pointer;
    border-radius: 20px;
  `;
  return message;
};
const Header_Right_Notification = () => {
  const Notification = document.createElement("div");
  Notification.className = "Notification";
  Notification.innerHTML = `
    <svg
    viewBox="0 0 28 28"
    class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0"
    fill="currentColor"
    height="20"
    width="20"
  >
    <path
      d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"
    ></path>
    </svg>
  `;
  Notification.style = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #E4E6EB;
  cursor: pointer;
  border-radius: 20px;
  margin-left: 10px;
  `;
  return Notification;
};
const Header_Right_Account = (User) => {
  const Account = document.createElement("div");
  Account.className = "Account";
  Account.innerHTML = `
    <img
    id="AnhDaiDien"
    src="../images/R (1).jpeg"
    style="width: 100%; height: 100%; border-radius: 20px"
    />
  `;
  Account.style = `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #E4E6EB;
    cursor: pointer;
    border-radius: 20px;
    margin-left: 10px;
    position: relative;
  `;
  Account.addEventListener("click", (User) => {
    const HeaderContainer_Item = document.querySelector(".User");
    const SubAccount = HeaderContainer_Item.querySelector(
      ".Header_Right_SubAccount"
    );
    if (SubAccount) {
      HeaderContainer_Item.removeChild(SubAccount);
    } else {
      HeaderContainer_Item.appendChild(Header_Right_SubAccount());
    }
  });
  return Account;
};
const Header_Right_SubAccount = (User) => {
  const SubAccount = document.createElement("div");
  SubAccount.className = "Header_Right_SubAccount";
  SubAccount.style = `
    position: absolute;
    width: 343px;
    top: 57px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);
    padding: 10px 5px;
  `;
  const SubAccount_Head = document.createElement("div");
  SubAccount_Head.innerHTML = `
    <div style = "
      display: flex;
      align-items: center;
      margin: 0 4px;
      height: 60px;
      border-bottom: 2px #ced0d4 solid;
    ">
      <img 
      style = "width: 44px;height: 44px;border-radius: 50%;"
      src="../images/anh-dai-dien-chibi-cute_104205129.jpg" />
      <span style = "font-size: 16px;font-weight: 500;margin-left: 15px;">Nghĩa Nghĩa</span>
    </div>
    <div style = "margin : 10px 4px">
      <span style = "color: #1876f2;"><b>Xem tất cả trang cá nhân</b></span>
    </div>
  `;
  SubAccount_Head.style = `
    box-shadow: 0px 0.1px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 10px;
    min-width: 300px;
    margin: 0 13px 17px;
  `;
  const SubAccount_Bot = document.createElement("div");
  SubAccount_Bot.className = "option";
  SubAccount_Bot.innerHTML = `
  <div class="option-item">
  <div class="icon">
    <i
      style="
        background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/9TbszPwJYOK.png');
        background-position: -110px -110px;
        background-size: 190px 186px;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        display: inline-block;
      "
    ></i>
  </div>
  <span>Cài đặt & quyền riêng tư</span>
  <i
    style="
      background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/9TbszPwJYOK.png');
      background-position: -112px -28px;
      background-size: 190px 186px;
      width: 24px;
      height: 24px;
      margin-left: 70px;
    "
  ></i>
</div>
<div class="option-item">
<div class="icon">
  <i
    data-visualcompletion="css-img"
    class="x1b0d499 xep6ejk"
    style="
      background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/jRKOGvZEHns.png');
      background-position: 0px -332px;
      background-size: 42px 464px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      display: inline-block;
    "
  ></i>
</div>
<span>Trợ giúp & hỗ trợ</span>
<i
  style="
    background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/9TbszPwJYOK.png');
    background-position: -112px -28px;
    background-size: 190px 186px;
    width: 24px;
    height: 24px;
    margin-left: 115px;
  "
></i>
</div>
<div class="option-item">
<div class="icon">
  <i
    data-visualcompletion="css-img"
    class="x1b0d499 xep6ejk"
    style="
      background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/CDtr6P_Uyhu.png');
      background-position: 0px -202px;
      background-size: 26px 620px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      display: inline-block;
    "
  ></i>
</div>
<span>Màn hình & trợ năng</span>
<i
  style="
    background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/9TbszPwJYOK.png');
    background-position: -112px -28px;
    background-size: 190px 186px;
    width: 24px;
    height: 24px;
    margin-left: 90px;
  "
></i>
</div>
<div class="option-item">
<div class="icon">
  <i
    data-visualcompletion="css-img"
    class="x1b0d499 xep6ejk"
    style="
      background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/jRKOGvZEHns.png');
      background-position: 0px -156px;
      background-size: 42px 464px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      display: inline-block;
    "
  ></i>
</div>
<span>Đóng góp ý kiến</span>
</div>
<a href="../FormLogIn/FormLogIn.html">
<div class="option-item">
  <div class="icon">
    <i
      style="
        background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/TZSWLqRaW74.png');
        background-position: 0px -336px;
        background-size: 26px 664px;
        width: 20px;
        height: 20px;
      "
    ></i>
  </div>
  <span>Đăng xuất</span>
</div>
</a>
</div>
  `;
  SubAccount.appendChild(SubAccount_Head);
  SubAccount.appendChild(SubAccount_Bot);

  return SubAccount;
};
export const HeaderLayout = () => {
  //ContainerHeader
  const HeaderContainer = document.createElement("div");
  HeaderContainer.className = "HeaderContainer";
  HeaderContainer.style = `
    margin: 0 auto;
    height: 100%;
    width: 97%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  HeaderContainer.appendChild(HeaderElement.Left());
  HeaderContainer.appendChild(HeaderElement.Center());
  HeaderContainer.appendChild(HeaderElement.Right());

  //Header
  const header = document.createElement("header");
  header.className = "header";
  header.style = `
    background-color: #ffffff;
    border-bottom: 1px solid #E4E6EB;
    box-shadow: 0px 0.5px 4px rgba(0, 0, 0, 0.1);
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  `;
  header.appendChild(HeaderContainer);

  return header;
};

export const HeaderElement = {
  Left: () => {
    const html = `
          <a href="#">
            <svg
              aria-label="Logo Facebook"
              class="x1ujvgzy"
              role="img"
              viewBox="0 0 120 24"
              width="120"
              style="fill: #1877f2"
            >
              <path
                d="m109.202 14.864 4.404-7.03h4.746l-4.622 7.278 4.808 7.463h-4.746l-4.59-7.215v7.215h-4.467V.433l4.467-.402v14.833ZM98.596 14.524c0-1.951-.807-3.5-2.885-3.5s-2.885 1.549-2.885 3.5v1.363c0 1.95.807 3.499 2.885 3.499s2.885-1.549 2.885-3.5v-1.362ZM88.36 15.577v-.743c0-4.243 2.42-7.309 7.351-7.309s7.351 3.066 7.351 7.309v.743c0 4.242-2.42 7.308-7.351 7.308-4.932 0-7.351-3.066-7.351-7.308ZM82.406 14.524c0-1.951-.807-3.5-2.884-3.5-2.079 0-2.885 1.549-2.885 3.5v1.363c0 1.95.806 3.499 2.885 3.499 2.077 0 2.884-1.549 2.884-3.5v-1.362Zm-10.235 1.053v-.743c0-4.243 2.419-7.309 7.35-7.309 4.932 0 7.352 3.066 7.352 7.309v.743c0 4.242-2.42 7.308-7.352 7.308-4.931 0-7.35-3.066-7.35-7.308ZM66.216 14.648c0-2.075-.806-3.623-2.946-3.623-1.83 0-2.823 1.3-2.823 3.406v1.548c0 2.106.993 3.407 2.823 3.407 2.14 0 2.946-1.549 2.946-3.623v-1.115Zm4.467 1.022c0 4.118-1.985 7.215-6.08 7.215-2.233 0-3.783-1.115-4.404-2.539v2.23h-4.218V.434L60.447.03v9.848c.651-1.3 2.078-2.354 4.157-2.354 4.094 0 6.079 3.097 6.079 7.216v.929ZM44.723 13.843h5.397v-.372c0-1.61-.651-2.88-2.606-2.88-2.016 0-2.791 1.27-2.791 3.252m-4.466 1.92v-1.301c0-4.18 2.388-6.937 7.257-6.937 4.59 0 6.607 2.787 6.607 6.875v2.353h-9.398c.093 2.014.992 2.912 3.474 2.912 1.675 0 3.443-.341 4.745-.898l.807 3.065c-1.179.62-3.598 1.084-5.738 1.084-5.645 0-7.754-2.818-7.754-7.153M35.388 7.525c1.737 0 3.38.372 4.28.991l-.992 3.159c-.683-.34-1.8-.682-2.978-.682-2.42 0-3.474 1.394-3.474 3.778v.868c0 2.384 1.055 3.778 3.474 3.778 1.179 0 2.295-.34 2.978-.682l.992 3.16c-.9.618-2.543.99-4.28.99-5.242 0-7.63-2.818-7.63-7.34v-.68c0-4.522 2.388-7.34 7.63-7.34M15.973 15.732c0 2.198.806 3.654 2.884 3.654 1.83 0 2.76-1.332 2.76-3.438v-1.486c0-2.106-.93-3.437-2.76-3.437-2.078 0-2.884 1.455-2.884 3.654v1.053Zm-4.467-.991c0-4.119 1.954-7.216 6.049-7.216 2.233 0 3.598 1.146 4.249 2.57v-2.26h4.28v14.74h-4.28v-2.23c-.62 1.425-2.016 2.54-4.25 2.54-4.094 0-6.048-3.097-6.048-7.215v-.93ZM9.274 3.592c-1.396 0-1.8.62-1.8 1.982v2.26h3.723l-.372 3.655h-3.35v11.086H3.009V11.49H0V7.835h3.009V5.636C3.009 1.951 4.497 0 8.654 0c.9 0 1.954.062 2.605.155v3.437H9.274Z"
              ></path>
            </svg>
          </a>
        `;
    const newElement = document.createElement("div");
    newElement.classList.add("HeaderContainer_Item");
    newElement.style = `
      height: 100%;
      display: flex;
      align-items: center;
      width: 28%;
    `;
    newElement.classList.add("Logo");

    newElement.innerHTML = html;
    return newElement;
  },
  Center: () => {
    const html = `
    <input
      id="header_search_input"
      type="text"
      placeholder="Tìm kiếm trên Facebook"
      style="
        width: 100%;
        height: 40px;
        background-color: #f0f2f5;
        border-radius: 20px;
        padding-left: 30px;
        border: none;
      "
    />`;
    const newElement = document.createElement("div");
    newElement.classList.add("HeaderContainer_Item");
    newElement.classList.add("Search");
    newElement.style = `
      width: 40%;
      display: flex;
      justify-content: center;
      position: relative;
    `;
    newElement.innerHTML = html;
    const inputElement = newElement.querySelector("input");
    Create_Even_For_ElementInput_In_HeaderCenter(inputElement);
    return newElement;
  },
  Right: (User) => {
    const newElement = document.createElement("div");
    newElement.classList.add("HeaderContainer_Item");
    newElement.classList.add("User");
    newElement.style = `
      width: 32%;
      display: flex;
      justify-content: flex-end;
    `;
    newElement.appendChild(Header_Right_Message());
    newElement.appendChild(Header_Right_Notification());
    newElement.appendChild(Header_Right_Account());

    return newElement;
  },
};
