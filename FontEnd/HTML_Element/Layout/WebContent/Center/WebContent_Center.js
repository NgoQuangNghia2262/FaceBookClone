import { StoryLayout } from "./Story.js";
import { CratePostLayout } from "./CratePost.js";
import { TaoPhongHopMatLayOut } from "./TaoPhongHopMat.js";
import { ListPost } from "../../../Post.js";

export const Storys = (Storys) => {
  const ListStory = document.createElement("div");
  ListStory.style = `
    display: grid;
    width: 100%;
    height: 200px;
    grid-template-columns: repeat(5 , 1fr);
    grid-gap: 10px;
    overflow: hidden;
  `;
  if (!Storys) {
    [1, 2, 3, 4, 5].forEach((story) => {
      ListStory.appendChild(StoryLayout(story));
    });
  }
  return ListStory;
};

export const WebContent_Center = async (User) => {
  const root = document.querySelector("#WebContent_Center");
  const storys = await User.Storys();
  root.appendChild(Storys(storys));
  root.appendChild(CratePostLayout(User));
  root.appendChild(TaoPhongHopMatLayOut());
  root.appendChild(ListPost());
};
