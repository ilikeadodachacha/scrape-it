import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import getDonaldQuotes from './src/donaldQuotes';
import express from 'express';

const app = express();
app.get('**', (req, res) => {
  getDonaldQuotes()
    .then((quotes) => {
      const html = renderToString(<App quotes={quotes} />);
      res.set('Cache-Control', 'public, max-age: 600, s-maxage=1200')
      res.send(html);
    })
    .catch(e => res.json(e));
});

export let ssrApp = functions.https.onRequest(app);