# 📝 Minimal HTMX Blog

A minimal, full-stack blog project powered by **HTMX**, **Node.js**, **Express**, and **SQLite** — no frontend JavaScript frameworks required.

> ✅ Server-rendered  
> ✅ HTMX-powered dynamic comments  
> ✅ Deployable in minutes  
> ✅ Ideal for learning or bootstrapping real projects

---

## 🚀 Features

- Full blog listing and post view
- Dynamic comment form with `hx-get`, `hx-post`, `hx-target`, and `hx-swap`
- Server-rendered HTML using EJS templates
- Lightweight SQLite database
- Progressive enhancement friendly
- No build step, no bundler

---

## 🛠 Stack

- Node.js + Express
- SQLite (in-memory)
- EJS templating
- HTMX (CDN)

---

## 📦 Installation

```bash
git clone https://github.com/rakeshongithub/minimal-htmx-blog.git
cd minimal-htmx-blog
npm install
node server.js
```

Visit: http://localhost:3000

## ✍️ File Overview

| File                | Purpose                              |
| ------------------- | ------------------------------------ |
| `server.js`         | Sets up Express routes and views     |
| `db.js`             | Handles SQLite DB setup and queries  |
| `views/`            | EJS templates for pages and partials |
| `public/styles.css` | Optional CSS styling                 |

## 💡 What You'll Learn

> How HTMX works with server-rendered HTML

> How to structure a content blog without React/Vue

> How to create a real, interactive form using just HTML attributes

## 🌐 Deployment

▶️ Render

> Push this repo to GitHub

> Go to Render → New Web Service

> Connect your repo

> Set build command: npm install

> Set start command: node server.js

> Done!

## 🙌 Credits & Inspiration

Created for this blog article: **HTMX: The Tiny HTML Library That Might Just Replace Your Frontend Framework**

## 💻 Code: Minimal Blog with HTMX

(minimal-htmx-blog)[https://github.com/rakeshongithub/minimal-htmx-blog]
