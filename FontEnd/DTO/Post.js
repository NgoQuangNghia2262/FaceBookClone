async function fetchData(coursAPI, data) {
  try {
    const response = await fetch(coursAPI, data);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
class Post {
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
    const share = await fetchData(
      `http://localhost:8000/data/api/post/countShare/${this.ID}`
    );
    return share[0].countShare;
  }
  async isLikedByUser(userID) {
    const wasLike = await fetchData(
      `http://localhost:8000/data/api/post/waslike/?postId=${this.ID}&userId=${userID}`
    );
    return wasLike[0] ? true : false;
  }
}
