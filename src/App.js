import React from 'react';
import { bindAll } from 'lodash';
/* eslint-disable */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      quotes: this.props.quotes.messages.non_personalized,
    }
    bindAll(this, 'handleChange', 'goScraping');
  }

  handleChange(e) {
    e.preventDefault();
    const thisState = this.state;
    thisState.searchTerm = e.target.value;
    this.setState({
      searchTerm: thisState.searchTerm
    })
  }

  goScraping(e) {
    e.preventDefault();
    console.log(this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <form className="Search-form" onSubmit={this.goScraping}>
          Enter a search term: <input type="text" name="search-term" value={this.state.searchTerm} onChange={this.handleChange}/><br/>
          <input type="submit" value="Scrape-it"/>
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
