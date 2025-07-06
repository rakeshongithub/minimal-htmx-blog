const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(
    `CREATE TABLE posts (id INTEGER PRIMARY KEY, title TEXT, content TEXT)`
  );
  db.run(
    `CREATE TABLE comments (id INTEGER PRIMARY KEY, postId INTEGER, text TEXT)`
  );

  db.run(`INSERT INTO posts (title, content) VALUES (?, ?)`, [
    "First Post",
    "This is the content of the first post.",
  ]);

  db.run(`INSERT INTO posts (title, content) VALUES (?, ?)`, [
    "Second Post",
    "This is the content of the second post.",
  ]);
});

module.exports = {
  getPosts: () =>
    new Promise((res, rej) => {
      db.all(`SELECT * FROM posts`, [], (err, rows) =>
        err ? rej(err) : res(rows)
      );
    }),
  getPost: (id) =>
    new Promise((res, rej) => {
      db.get(`SELECT * FROM posts WHERE id = ?`, [id], (err, row) =>
        err ? rej(err) : res(row)
      );
    }),
  getComments: (postId) =>
    new Promise((res, rej) => {
      db.all(`SELECT * FROM comments WHERE postId = ?`, [postId], (err, rows) =>
        err ? rej(err) : res(rows)
      );
    }),
  addComment: (postId, text) =>
    new Promise((res, rej) => {
      db.run(
        `INSERT INTO comments (postId, text) VALUES (?, ?)`,
        [postId, text],
        (err) => (err ? rej(err) : res())
      );
    }),
};
