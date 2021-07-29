import env from "react-dotenv";
import { useEffect, useState } from "react";

const API_URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${env.API_KEY}&hash=${env.HASH}`;

const FetchData = () => {
  const [marvelData, setMarvelData] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data => setMarvelData(data)))
      .catch(error => console.log(error));
  }, [])
  return marvelData
};

export default FetchData;