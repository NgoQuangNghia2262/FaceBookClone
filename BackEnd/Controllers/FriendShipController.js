const { ExcuteQuery } = require("../DataBase/Database");

const FriendShipController = {
  getUserProfile: async (req, res) => {
    try {
      const query = `
        SELECT Name , Img
        FROM UserProfile
        INNER JOIN Friendship ON UserProfile.Id = Friendship.ProfileID2
        WHERE Friendship.ProfileID1 = '${req.query.id}' AND Friendship.Relationship = N'Bạn Bè'

        UNION

        SELECT Name , Img
        FROM UserProfile
        INNER JOIN Friendship ON UserProfile.Id = Friendship.ProfileID1
        WHERE Friendship.ProfileID2 = '${req.query.id}' AND Friendship.Relationship = N'Bạn Bè';
      `;
      const result = await ExcuteQuery(query);
      res.send(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = FriendShipController;
