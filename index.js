const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.status(200).end("Cheers, Application Started !!!! :)");
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
