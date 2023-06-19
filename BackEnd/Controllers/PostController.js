const { ExcuteQuery } = require("../DataBase/Database");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const PostController = {
  getTwoPost: async (req, res) => {
    try {
      const query = `SELECT *
      FROM Post
      where Category = 'Post'
      ORDER BY CreatedTime DESC
      OFFSET ${req.query.id * 2} ROWS 
      FETCH NEXT 2 ROWS ONLY;`;
      const result = await ExcuteQuery(query);
      res.send(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getCountLike: async (req, res) => {
    try {
      const countLike = await ExcuteQuery(
        `select count(*) as countLike from tbLike where PostId = ${req.params.Id}`
      );
      res.status(200).send(countLike);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getCountComment: async (req, res) => {
    try {
      const countComment = await ExcuteQuery(
        `select count(*) as countComment from CommentShare where PostId = ${req.params.Id} and category = N'comment'`
      );
      res.status(200).send(countComment);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getCountShare: async (req, res) => {
    try {
      const countShare = await ExcuteQuery(
        `select count(*) as countShare from CommentShare where PostId = ${req.params.Id} and category = N'share'`
      );
      res.status(200).send(countShare);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getUserLike: async (req, res) => {
    try {
      const user = await ExcuteQuery(
        `select * from tbLike where PostId = '${req.query.postId}' and ProfileID = '${req.query.userId}'`
      );
      res.send(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  AddLike: async (req, res) => {
    try {
      const query = `insert into tbLike values('${req.body.postId}' , '${req.body.userId}')`;
      await ExcuteQuery(query);
      res.send("Like");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  DeleteLike: async (req, res) => {
    try {
      await ExcuteQuery(
        `delete tbLike where PostId = '${req.body.postId}' and ProfileID = '${req.body.userId}'`
      );
      res.send("Delete");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  UpLoadImg: async (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = "public/images";
    form.keepExtensions = true;
    form.maxFieldsSize = 10 * 1024 * 1024;
    form.multiples = false;
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
      const file = files[""];
      if (typeof file === "undefined") {
        res.status(200).send("");
      }
      const tempFilePath = file.filepath;
      const targetDir = path.join(path.dirname(__dirname), "public", "images");
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      const targetFilePath = path.join(targetDir, file.originalFilename);
      fs.readFile(tempFilePath, async (err, data) => {
        if (err) throw err;
        fs.writeFile(targetFilePath, data, (err) => {
          if (err) throw err;
          console.log("File save success !!!");
        });
        res
          .status(200)
          .send(
            JSON.stringify("../BackEnd/public/images/" + file.originalFilename)
          );
      });
    });
  },
  CreatePost: async (req, res) => {
    try {
      console.log(req.body);
      const query = `insert into Post values ('${req.body.UserID}' , N'${req.body.content}' , '${req.body.pathimg}' , getdate(),N'Post')`;
      await ExcuteQuery(query);
      res.status(200).send(JSON.stringify("create success !!!"));
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
module.exports = PostController;
