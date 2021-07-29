import Home from "./pages/Home/index";
import Global from "./globalStyles";
import FetchData from "./hooks/useFetchData";

function App() {
  const MarvelData = FetchData();

  console.log("fetchData:",MarvelData);

  return (
    <>
      <Global />
      <Home />
    </>
  );
}

export default App;
