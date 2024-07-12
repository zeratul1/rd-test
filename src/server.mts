import express from "express";
import { encrypt, decrypt } from "./crypto";

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to RD test!');
});

app.post('/encrypt', async (req, res) => {
  const data = await encrypt(req.body);
  res.send(data);
});

app.post('/decrypt', async (req, res) => {
  const data = await decrypt(req.body);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});