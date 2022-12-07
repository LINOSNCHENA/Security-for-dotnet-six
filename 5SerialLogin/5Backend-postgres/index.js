

//const express = require('express')
import express from 'express'
const userRouter = require('./routes/user.routes.js')
const postRouter = require('./routes/post.routes.js')

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.status(200).json("Сервер работает!");
// });

// app.get("/", (req, res) => {
//     res.status(200).json("POSTGRE + NODEJS");
// })

app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => {
  console.log(`App start on port: ${PORT}`);
});
module.exports = app