const axios = require('axios');

axios.get("http://localhost:3000/")
  .then(value => value.data)
  .then(data => console.log('Reponse HTTP', data))
  .catch(err => console.error(err))


axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100").then(res => {
  const data = res.data;
  console.log(data);
});

const a = axios.get("blablabl").then(res => res.data)

const getListPokemon = axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');

getListPokemon.then(res => {
    const dataUrl = res.data.next;
    const secondCall = axios.get(dataUrl);
    secondCall.then(res => {
        console.log(res.data.results)
    });

    return dataUrl
  });

getListPokemon.then(res => {
    const dataUrl = [];
    res.data.results.slice(0, 5).map(resu => dataUrl.push(resu.url))

    // dataUrl [url, url, url, ] => (avec map) [axios.get(url), ...] => axios.all(tableau)
  })
