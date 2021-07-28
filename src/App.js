import { useEffect } from "react";
import Home from "./pages/Home/index";
import Global from "./globalStyles";
import fetchData from "./services/getData";

function App() {
  // const [characters, setCharacters] = useState({});

  useEffect(
    () => {
      fetchData();
    },[])

    // console.log(characters);

  return (
    <>
      <Global />
      <Home />
    </>
  );
}

export default App;
