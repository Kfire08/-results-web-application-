// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
// const cors = require('cors');
import cors from 'cors';
// const fetch = require('node-fetch');
import fetch from "node-fetch";
const app = express();

app.use(express.json());
app.use(cors());

app.post('/test', async (req, res) => {
  const { rollNumber } = req.body;
  const data = [];
  console.log(rollNumber);

  for (const item of rollNumber) {
    const res = await fetch(` http://proedge.me/test.php?rollnumber=${item}`);
    const text = await res.text();

    data.push(text);
    console.log(text);
  }

  res.json(data);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on ${port}`));
