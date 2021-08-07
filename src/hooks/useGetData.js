import env from "react-dotenv";
import { useEffect, useState } from "react";

const useGetData = () => {
  const [marvelData, setMarvelData] = useState({});

  useEffect( () => {
    getData();
  }, [])

  const getData = async () => {
    const API_URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${env.API_KEY}&hash=${env.HASH}`;
    await fetch(API_URL)
      .then((response) => response.json())
      .then((recivedData => setMarvelData(recivedData)))
  }
  return marvelData
};

export default useGetData;



