// import { useState, useEffect } from "react";
import env from "react-dotenv";
import Home from "./pages/Home/index";
import Minicard from "./components/MiniCard";
import Global from "./globalStyles";
import FetchData from "./hooks/useGetData";

function App() {
  const MarvelData = FetchData();
  console.log(MarvelData);

  return (
    <>
      <Global />
      <Home />

      <Minicard />
      
    </>
  );
}

export default App;
