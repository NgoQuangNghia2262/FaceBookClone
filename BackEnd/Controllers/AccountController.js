const { ExcuteQuery } = require("../DataBase/Database");

const AccountController = {
  registerUser: async (req, res) => {
    try {
      const query = `insert into Account values('${req.body.UserName}' , '${req.body.PassWord}' , '${req.body.KeyActivate}' , 'non-activate')`;
      console.log(query);
      await ExcuteQuery(query);
      res.status(200).send("success !!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  FindAll: async (req, res) => {
    try {
      const query = `select * from Account`;
      const result = await ExcuteQuery(query);
      res.send(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  FindOne: async (req, res) => {
    try {
      const query = `select * from Account where username = '${req.params.username}'`;
      const result = await ExcuteQuery(query);
      res.send(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateKeyActivate: async (req, res) => {
    try {
      const query = `update Account set KeyActivate = '${req.body.KeyActivate}' where username = '${req.body.username}'`;
      console.log(req.body);
      await ExcuteQuery(query);
      res.status(200).send("success !!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  ActivateAccount: async (req, res) => {
    try {
      const query = `update Account set KeyActivate = '' , Status = 'activate' where username = '${req.body.username}'`;
      await ExcuteQuery(query);
      res.status(200).send("success !!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = AccountController;
