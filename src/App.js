import Home from "./pages/Home/index";
import Global from "./globalStyles";
import FetchData from "./hooks/fetchData";

function App() {
  const MarvelData = FetchData();
  console.log(MarvelData);
  if(MarvelData.code === 200){
    console.log(MarvelData.data.results[0]);
  }

  return (
    <>
      <Global />
      <Home />
    </>
  );
}

export default App;
