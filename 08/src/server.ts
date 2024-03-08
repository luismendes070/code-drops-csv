import express from "express";
import { router } from "./routes";

import cors from 'cors';
const app = express()
 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

app.use(router);

app.listen(
    3000,
    () => console.log("Server is running")
);