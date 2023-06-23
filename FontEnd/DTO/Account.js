async function fetchData(coursAPI, data) {
  try {
    const response = await fetch(coursAPI, data);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default class Account {
  constructor(obj) {
    this.Username = obj.Username.trim();
    this.Password = obj.Password.trim();
    this.KeyActivate = obj.KeyActivate.trim();
    this.Status = obj.status.trim();
  }
  static async FindOne(username) {
    let account = await fetchData(
      `http://localhost:8000/data/api/account/${username}`
    );
    return new Account(account[0]);
  }
}
export const AccountController = {
  FindAll: async () => {
    const data = await fetchData("http://localhost:8000/data/api/account");
    const accounts = data.map((item) => {
      return new Account(item);
    });
    return accounts;
  },
  FindOne: async (username) => {
    let account = await fetchData(
      `http://localhost:8000/data/api/account/${username}`
    );
    return new Account(account[0]);
  },
  generateRandomString: () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  },
  RegistAccount: async (data) => {
    await fetchData("http://localhost:8000/data/api/account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  ActivateAccount: async (account) => {
    const data = {
      username: account.Username,
    };
    await fetchData("http://localhost:8000/data/api/account/activateaccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  UpdateKeyActivate: async (data) => {
    await fetchData(
      "http://localhost:8000/data/api/account/updatekeyactivate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  },
};
