const { ExcuteQuery } = require("../DataBase/Database");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const PostController = {
  getTwoPost: async (req, res) => {
    try {
      const query = `SELECT *
      FROM Post
      where Category = N'Post'
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
      res.send(countLike);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getCountComment: async (req, res) => {
    try {
      const countComment = await ExcuteQuery(
        `select count(*) as countComment from CommentShare where PostId = ${req.params.Id} and category = N'comment'`
      );
      res.send(countComment);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getCountShare: async (req, res) => {
    try {
      const countShare = await ExcuteQuery(
        `select count(*) as countShare from CommentShare where PostId = ${req.params.Id} and category = N'share'`
      );
      res.send(countShare);
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
    const form = formidable({ multiples: false });

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
      const file = files.file;
      const tempFilePath = file.filepath;
      const targetDir = path.join(path.dirname(__dirname), "public", "images");

      //lưu file
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      const targetFilePath = path.join(targetDir, file.originalFilename);
      // Đọc file từ đường dẫn tạm thời
      fs.readFile(tempFilePath, (err, data) => {
        if (err) throw err;
        // Ghi file vào thư mục đích
        fs.writeFile(targetFilePath, data, (err) => {
          if (err) throw err;
          console.log("File saved successfully");
        });
      });

      res.send(JSON.stringify("aaa"));
    });
  },
};
module.exports = PostController;
