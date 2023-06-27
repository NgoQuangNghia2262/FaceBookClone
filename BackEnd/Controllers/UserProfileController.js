const { ExcuteQuery } = require("../DataBase/Database");

const UserProfileController = {
  registerUser: async (req, res) => {
    try {
      const query = `insert into UserProfile values('../../BackEnd/public/images/OIP.jpeg', N'${req.body.Name}' , N'${req.body.Address}' , '${req.body.UserName}' ,  '${req.body.BirthDay}')`;
      await ExcuteQuery(query);
      res.send("Successfuly !!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
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
      const query = `select * from UserProfile where Phone = '${req.query.id}'`;
      const result = await ExcuteQuery(query);
      res.send(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllUserHaveName: async (req, res) => {
    try {
      const query = `select * from UserProfile where Name like N'%${req.params.name}%'`;
      const result = await ExcuteQuery(query);
      res.send(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = UserProfileController;
