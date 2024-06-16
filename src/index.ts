import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/foo", (req, res) => {
  console.log(req.body);
  res.send("Hello /foo!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
