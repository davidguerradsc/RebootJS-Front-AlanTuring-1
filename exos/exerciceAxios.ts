import axios from "axios";

const a = axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100").then(res => {
  const data = res.data;
  console.log(data);
});


