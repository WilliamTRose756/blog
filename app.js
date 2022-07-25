const express = require("express");

// express app

const app = express();

// Register View Engine
app.set("view engine", "ejs");

//  Listen for requests

app.listen(3000);

app.use((req, res, next) => {
  console.log("new request made");
  console.log("host:", req.hostname);
  console.log("path:", req.path);
  console.log("method:", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("In the next middleware");
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat Bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
  //   res.send("<p>Home page</p>");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
  //   res.send("<p>About page</p>");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a New Blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
