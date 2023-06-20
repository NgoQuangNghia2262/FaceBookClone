async function fetchData(coursAPI, data) {
  try {
    const response = await fetch(coursAPI, data);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
export const FriendController = {
  getListFriendbyUsername: async (username) => {
    let friends = await fetchData(
      `http://localhost:8000/friendship?id=${username}`
    );
    return friends;
  },
};
export default class Friend {
  constructor(obj) {
    (this.ProfileID1 = obj.ProfileID1),
      (this.ProfileID2 = obj.ProfileID2),
      (this.Relationship = obj.Relationship);
  }
}
