import express from "express";

const app = express();

app.get('/cliente', (req, res) => {
  return res.send("Hello world!");
})