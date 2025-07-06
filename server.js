const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const posts = await db.getPosts();
  res.render("index", { posts });
});

app.get("/post/:id", async (req, res) => {
  const post = await db.getPost(req.params.id);
  const comments = await db.getComments(req.params.id);
  res.render("post", { post, comments });
});

app.get("/comment-form/:postId", (req, res) => {
  res.render("partials/commentForm", { postId: req.params.postId });
});

app.post("/comment", async (req, res) => {
  await db.addComment(req.body.postId, req.body.text);
  const comments = await db.getComments(req.body.postId);
  res.render("partials/commentList", { comments });
});

app.listen(3000, () => console.log("🚀 Server on http://localhost:3000"));
