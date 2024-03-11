import csv from 'csv-parser';
import fs from 'fs';
import { errorHandler } from './errorHandler';
import express from "express";
import { router } from "./routes";

import cors from 'cors';
const app = express()
 
app.use(cors())
 
app.get('/cities/:id', function (req:any, res:any, next:any) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// Use o middleware de gerenciamento de erros
app.use(errorHandler);

app.get('/api/csv-to-json', (req:any, res:any) => {
  const results:any = [];

  fs.createReadStream('uscities-data.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
          res.json(results);
      });
});
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

app.use(router);

app.listen(
    3000,
    () => console.log("Server is running")
);