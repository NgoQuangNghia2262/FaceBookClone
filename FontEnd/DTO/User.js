async function fetchData(coursAPI, data) {
  try {
    const response = await fetch(coursAPI, data);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const UserController = {
  RegistUser: async (data) => {
    await fetchData("http://localhost:8000/Profile/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};

export default class User {
  constructor(obj) {
    (this.BirthDay = obj.BirthDay),
      (this.Address = obj.Address),
      (this.Img = obj.Img),
      (this.Name = obj.Name),
      (this.Phone = obj.Phone);
  }
}
