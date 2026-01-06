const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🎓 Student Management App - CI/CD Internship Project");
});

app.get("/students", (req, res) => {
  res.json([
    { id: 1, name: "Arun", department: "CSE" },
    { id: 2, name: "Kumar", department: "IT" }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
