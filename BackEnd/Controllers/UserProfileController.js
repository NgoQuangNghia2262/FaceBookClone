const { ExcuteQuery } = require("../DataBase/Database");

const UserProfileController = {
  getUserProfile: async (req, res) => {
    try {
      const query = `select * from UserProfile`;
      const result = await ExcuteQuery(query);
      res.send(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getUserProfileById: async (req, res) => {
    try {
      const query = `select * from UserProfile where Id = '${req.query.id}'`;
      const result = await ExcuteQuery(query);
      res.send(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = UserProfileController;
