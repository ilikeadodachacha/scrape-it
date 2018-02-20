import React from 'react';
import { render } from 'react-dom';
import App from './App';
import getDonaldQuotes from './donaldQuotes';

getDonaldQuotes().then((quotes) => {
    render(<App quotes={quotes}/>, document.querySelector('#root'));
  })
