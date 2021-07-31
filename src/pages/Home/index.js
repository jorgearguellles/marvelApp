import Header from "../../components/Header/index";
import TitlePage from "../../components/TitlePage";
import MiniCard from "../../components/MiniCard/index";
import {Wrapper ,WrapperResults} from "./styles";
import Footer from "../../components/Footer/index";
import CharactersContext from "../../context/CharactersContext";
import useGetData from "../../hooks/useGetData";
import Loader from "react-loader-spinner";

function Home(){
  const marvelData = useGetData();

  // console.log("fetchData:",marvelData);
  return(
    <CharactersContext.Provider value={marvelData}>
      <Wrapper>
        <Header />
        <TitlePage titlePage="Lista de Héroes"/>
        <WrapperResults>
          {
          marvelData.code === 200
            ? marvelData.data.results.map(
              character => 
                <MiniCard key={ marvelData.data.results !== null ? character.id : "Loading..."}
                  heroName = { marvelData.data.results !== null ? character.name : "Loading..."}
                  heroImg = { marvelData.data.results !== null ? character.thumbnail.path+".jpg" : "Loading..."}
                />
              )
            : <Loader
                type="Puff"
                color="#00BFFF"
                height={150}
                width={150}
                timeout={3000} //3 secs
              />
          }
        </WrapperResults>
        <Footer />
      </Wrapper>
    </CharactersContext.Provider>
  )
};

export default Home;