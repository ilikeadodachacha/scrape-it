import React from 'react';

function App(props) {
  const quotes = props.quotes.messages.non_personalized.map((quote, i) => {
    return <li key={i}>{quote}</li>
  });

  return (
    <ul>
      {quotes}
    </ul>
  );
}

export default App;