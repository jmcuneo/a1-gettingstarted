const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res, next) => {
  res.status(404).send("404 Error: File Not Found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
