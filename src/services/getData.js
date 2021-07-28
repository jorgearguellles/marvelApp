import env from "react-dotenv";

const fetchData = () => {
  return fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${env.API_KEY}&hash=${env.HASH}`)
    .then((response) => response.json())
    .then((data => console.log(data.data)));
};

export default fetchData;