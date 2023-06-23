const IconClose = () => {
  const newElement = document.createElement("i");
  newElement.style = `
        background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/29tRnTAs8yJ.png');
        background-position: -154px -154px;
        background-size: 190px 186px;
        width: 12px;
        height: 12px;
        display : inline-block
    `;
  return newElement;
};
export const HistorySearchItem = (User) => {
  const newElement = document.createElement("div");
  newElement.className = "HistorySearch-item";
  newElement.innerHTML = `
      <div>
          <img src="../images/R (1).jpeg" />
          <span>Nghĩa Nghĩa</span>
      </div>
  `;
  newElement.appendChild(IconClose());
  return newElement;
};

export const arrHistorySearchItem = (Users) => {
  const newElement = document.createElement("div");
  if (Users) {
    if (Array.isArray(Users)) {
      Users.forEach((User) => {
        const item = HistorySearchItem(User);
        newElement.appendChild(item);
      });
    }
  }
  return newElement;
};

export const HistorySearch = (Users) => {
  const root = document.createElement("div");
  root.className = "HistorySearch";
  root.innerHTML = `
    <div style="margin-bottom: 10px;display:flex;justify-content: space-between;">
      <h3>Tìm kiếm gần đây</h3>
      <a href="#">Chỉnh sửa</a>
    </div>
  `;
  root.style = `
    position: absolute;
    width: 100%;
    min-height: 200px;
    max-height: 300px;
    top: 57px;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 20px;
    overflow-y: scroll;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.4);
  `;
  root.appendChild(arrHistorySearchItem(Users));
  return root;
};

export const HistorySearchElement = {
  HistorySearchItem: HistorySearchItem,
  HistorySearch: HistorySearch,
  arrHistorySearchItem: arrHistorySearchItem,
};
