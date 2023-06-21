export const FriendElement = {
  element: (friend) => {
    const newElement = document.createElement("div");
    newElement.className = "Friend";
    newElement.innerHTML = `
        <img src="${friend.Img}" alt="" />
        <span>${friend.Name}</span>
        `;
    return newElement;
  },
};
