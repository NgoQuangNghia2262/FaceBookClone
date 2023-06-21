async function fetchData(coursAPI, data) {
  try {
    const response = await fetch(coursAPI, data);
    if (response.status === 500) {
      response = await fetch(coursAPI, data);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
export const PostController = {
  getPost: async (trang) => {
    let posts = await fetchData(
      `http://localhost:8000/data/api/post/trang?id=${trang}`
    );
    return posts;
  },
};
export default class Post {
  constructor(obj) {
    this.ID = obj.Id;
    this.ProfileID = obj.ProfileID;
    this.Content = obj.Content;
    this.Img = obj.Img;
    this.CreatedTime = obj.CreatedTime;
    this.Category = obj.Category;
  }
  async getUser() {
    const user = await fetchData(
      `http://localhost:8000/Profile/findone?id=${this.ProfileID}`
    );
    return user[0];
  }
  async CountLike() {
    const like = await fetchData(
      `http://localhost:8000/data/api/post/countLike/${this.ID}`
    );
    return like[0].countLike;
  }
  async CountComment() {
    const comment = await fetchData(
      `http://localhost:8000/data/api/post/countComment/${this.ID}`
    );
    return comment[0].countComment;
  }
  async CountShare() {
    let response = await fetch(
      `http://localhost:8000/data/api/post/countShare/${this.ID}`
    );
    if (response.status === 500) {
      response = await fetch(
        `http://localhost:8000/data/api/post/countShare/${this.ID}`
      );
    }
    const share = await response.json();
    return share[0].countShare;
  }
  async isLikedByUser(userID) {
    let response = await fetch(
      `http://localhost:8000/data/api/post/waslike/?postId=${this.ID}&userId=${userID}`
    );
    if (response.status === 500) {
      response = await fetch(
        `http://localhost:8000/data/api/post/waslike/?postId=${this.ID}&userId=${userID}`
      );
    }
    const result = await response.json();
    return result[0] ? true : false;
  }
  async AddLike(userID) {
    const data = {
      postId: this.ID,
      userId: userID,
    };
    console.log(data);
    fetch("http://localhost:8000/data/api/post/add/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  async DeleteLike(userID) {
    const data = {
      postId: this.ID,
      userId: userID,
    };
    fetch("http://localhost:8000/data/api/post/delete/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
