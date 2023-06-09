async function fetchData(coursAPI, data) {
  try {
    const response = await fetch(coursAPI, data);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default class User {
  constructor(obj) {
    (this.BirthDay = obj.BirthDay),
      (this.Address = obj.Address),
      (this.Img = obj.Img),
      (this.Name = obj.Name),
      (this.Phone = obj.Phone);
  }
  static async FindOne(username) {
    let userProfile = await fetchData(
      `http://localhost:8000/Profile/findone?id=${username}`
    );
    return new User(userProfile[0]);
  }
  static async RegistUser(data) {
    await fetchData("http://localhost:8000/Profile/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  async Friends() {
    let data = await fetchData(
      `http://localhost:8000/friendship?id=${this.Phone}`
    );
    const friends = data.map((friend) => {
      return new User(friend);
    });
    return friends;
  }
  async Posts() {}
  async Storys() {}
}
