import express, { Request, Response } from "express";
express.static("public");
const path = require("path");
const PORT = 3000;

function init() {
  const app = express();
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

app.use(express.static(path.join(__dirname, '../public')));

  app.get("/hello", (req, res) => {
    res.json({
      message: 'Success fetch message',
      data: 'Hello World!'
    });
  });

  app.get("/user", (req, res) => {
    res.json({
      message: "Succes fetch user",
      data: {
        id: 1,
        name: "Budi",
        username: "budidu",
        email: "budidu@gmail.com"
      }
    })
  })

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
