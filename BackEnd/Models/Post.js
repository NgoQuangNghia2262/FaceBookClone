class Post {
  constructor(obj) {
    this.ID = obj.Id;
    this.ProfileID = obj.ProfileID;
    this.Content = obj.Content;
    this.Img = obj.Img;
    this.CreatedTime = obj.CreatedTime;
    this.Category = obj.Category;
  }
}

module.exports = Post;
