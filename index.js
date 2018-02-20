import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import getDonaldQuotes from './src/donaldQuotes';
import express from 'express';
import fs from 'fs';
import path from 'path';

// const index = new Promise((resolve, reject) => {
//   return fs.readFile(__dirname + './index.html', 'utf8', (err, data) => {
//     !err ? resolve(data) : reject(err);
//   });
// });
const index = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const app = express();
app.get('**', (req, res) => {
  getDonaldQuotes()
    .then((quotes) => {
      const html = renderToString(<App quotes={quotes} />);
      const finalHtml = index.replace('<!--::App::-->', html);
      res.set('Cache-Control', 'public, max-age: 600, s-maxage=1200');
      res.send(finalHtml);
    })
    .catch(e => res.json(e));
});

export let ssrApp = functions.https.onRequest(app);