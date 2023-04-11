const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  let filePath = path.join(__dirname, "public", "index.html");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data, "utf8");
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data, "utf8");
    }
  });
});

app.get("/about", (req, res) => {
  let filePath = path.join(__dirname, "public", "about.html");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data, "utf8");
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data, "utf8");
    }
  });
});

app.get("/contact-me", (req, res) => {
  let filePath = path.join(__dirname, "public", "contact-me.html");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data, "utf8");
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data, "utf8");
    }
  });
});

app.get("*", (req, res) => {
  fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data, "utf8");
  });
});

app.listen(port);
