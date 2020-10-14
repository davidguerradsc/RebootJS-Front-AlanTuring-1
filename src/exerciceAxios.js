const axios = require('axios');

axios.get("http://localhost:3000/")
  .then(value => value.data)
  .then(data => console.log('Reponse HTTP', data))
  .catch(err => console.error(err))