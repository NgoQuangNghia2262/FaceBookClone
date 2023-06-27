const { ExcuteQuery } = require("../DataBase/Database");

const FriendShipController = {
  getUserProfile: async (req, res) => {
    try {
      const query = `
        SELECT *
        FROM UserProfile
        INNER JOIN Friendship ON UserProfile.Phone = Friendship.ProfileID2
        WHERE Friendship.ProfileID1 = '${req.query.id}' AND Friendship.Relationship = 'Friend'

        UNION

        SELECT *
        FROM UserProfile
        INNER JOIN Friendship ON UserProfile.Phone = Friendship.ProfileID1
        WHERE Friendship.ProfileID2 = '${req.query.id}' AND Friendship.Relationship = 'Friend';

      `;
      const result = await ExcuteQuery(query);
      res.send(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = FriendShipController;
