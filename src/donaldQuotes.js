import fetch from 'isomorphic-fetch';

const getDonaldQuotes = () => {
  return fetch('https://api.whatdoestrumpthink.com/api/v1/quotes')
    .then(res => res.json())
    .catch(e => console.log(e));
}

export default getDonaldQuotes;
