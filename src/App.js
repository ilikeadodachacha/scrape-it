import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: this.props.quotes.messages.non_personalized,
    }
  }

  render() {
    return (
      <ul>
        {this.state.quotes.map((quote, i) => {
          return <li key={i}>{quote}</li>
        })}
      </ul>
    );
  }
}

export default App;
