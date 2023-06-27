export const StoryLayout = (Story) => {
  const story = document.createElement("div");
  story.className = "Story";
  story.style = `
    height: 200px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0.5px 4px rgba(0, 0, 0, 0.1);
    `;
  story.innerHTML = `
    
    `;

  return story;
};
