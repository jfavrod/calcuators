import cors from 'cors';
import express from 'express';
import { readFileSync } from 'fs';
import https from 'https';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static('dist'));

https.createServer({
  cert: readFileSync('server/cert.pem', 'utf-8'),
  key: readFileSync('server/ssl.key', 'utf-8'),
}, app).listen(PORT, undefined, undefined, () => console.log(`server listening on port ${PORT}...`));
