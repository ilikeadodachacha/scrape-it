import React from 'react';
/* eslint-disable */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: this.props.quotes.messages.non_personalized,
    }
  }

  render() {
    return (
      <div>
        <form className="Search-from">
          Enter a search term: <input type="text" name="search-term"/><br/>
          <input type="submit"/>
        </form>
        <ul>
          {this.state.quotes.map((quote, i) => {
            return <li key={i}>{quote}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
