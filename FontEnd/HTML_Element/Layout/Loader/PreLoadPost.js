export const PreLoadPost = () => {
  const PreLoadPostElement = document.createElement("div");
  PreLoadPostElement.className = "ListPost_PreLoad";
  PreLoadPostElement.id = "ListPost_PreLoad";
  PreLoadPostElement.innerHTML = `
  <div class="Post-Item-Top">
          <div style="display: flex">
            <div
              class="animation_preload"
              style="
                margin-right: 10px;
                opacity: 0.25;
                width: 40px;
                height: 40px;
                border-radius: 50%;
              "
            ></div>
            <div>
              <div
                class="animation_preload"
                style="
                  border-radius: 5px;
                  width: 88px;
                  height: 8px;
                  margin-top: 5px;
                  animation-delay: 0.5s;
                "
              ></div>
              <div
                class="animation_preload"
                style="
                  border-radius: 5px;
                  width: 68px;
                  height: 8px;
                  margin-top: 5px;
                  animation-delay: 0.5s;
                "
              ></div>
            </div>
          </div>
        </div>
        <div style="width: 100%" class="Post-Item-center">
          <div style="width: 100%; height: 180px"></div>
        </div>
        <div style="width: 100%; padding-bottom: 7px" class="Post-Item-bot">
          <div
            style="
              width: 100%;
              height: 20px;
              display: flex;
              justify-content: space-around;
            "
          >
            <div
              class="animation_preload"
              style="
                border-radius: 5px;
                width: 66px;
                height: 8px;
                margin-top: 5px;
                animation-delay: 0.2s;
              "
            ></div>
            <div
              class="animation_preload"
              style="
                border-radius: 5px;
                width: 66px;
                height: 8px;
                margin-top: 5px;
                animation-delay: 0.4s;
              "
            ></div>
            <div
              class="animation_preload"
              style="
                border-radius: 5px;
                width: 66px;
                height: 8px;
                margin-top: 5px;
                animation-delay: 0.6s;
              "
            ></div>
          </div>
        </div>
  `;
  return PreLoadPostElement;
};
