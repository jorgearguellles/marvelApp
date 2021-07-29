import Home from "./pages/Home/index";
import Global from "./globalStyles";
import useGetCharacters from "./hooks/useGetCharacters";

function App() {
  const marvelCharacters = useGetCharacters();

  console.log("fetchData:",marvelCharacters);

  return (
    <>
      <Global />
      <Home />
    </>
  );
}

export default App;
