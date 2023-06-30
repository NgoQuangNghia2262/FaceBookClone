export const CircleLoad = () => {
  const div = document.createElement("div");
  div.className = "CircleLoad";
  div.style = `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    display : flex;
    align-items: center;
    justify-content: center;
  `;
  div.innerHTML = `<div class="loader"></div>`;
  return div;
};
