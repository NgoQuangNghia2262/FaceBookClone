const handleClickInput = () => {
  console.log("hi");
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
  elemetInput.addEventListener("click", handleClickInput);
  return CreatePostElement;
};
