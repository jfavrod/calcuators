import approot from 'app-root-path';
import cors from 'cors';
import express from 'express';
import { readFileSync } from 'fs';
import https from 'https';

const APP = express();
const SSL_CERT = `${approot}/ssl/fullchain.pem`;
const SSL_KEY = `${approot}/ssl/privkey.pem`;
// 'server/fullchain.pem'
// 'server/privkey.pem'
const PORT = 3000;

APP.use(cors());

APP.use(express.static('dist'));
https.createServer({
  cert: readFileSync(SSL_CERT, 'utf-8'),
  key: readFileSync(SSL_KEY, 'utf-8'),
}, APP).listen(PORT, undefined, undefined, () => console.log(`server listening on port ${PORT}...`));
