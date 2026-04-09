const express = require("express");
const path = require("path");

const app = express();
const publicDir = __dirname;

// Serve the project root as a static site.
app.use(express.static(publicDir));

app.get("/", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

// Preserve the old entry path so existing links do not break.
app.get("/subaru_tribute.html", (_req, res) => {
  res.redirect(301, "/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
