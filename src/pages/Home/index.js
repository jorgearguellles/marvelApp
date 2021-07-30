import Header from "../../components/Header/index";
import TitlePage from "../../components/TitlePage";
import MiniCard from "../../components/MiniCard/index";
import {Wrapper ,WrapperResults} from "./styles";
import Footer from "../../components/Footer/index";
import CharactersContext from "../../context/CharactersContext";
import useGetCharacters from "../../hooks/useGetCharacters";

function Home(){
  const marvelCharacters = useGetCharacters();

  console.log("fetchData:",marvelCharacters);
  return(
    <CharactersContext.Provider value={marvelCharacters}>
      <Wrapper>
        <Header />
        <TitlePage titlePage="Lista de Héroes"/>
        <WrapperResults>
          {/* {
            marvelCharacters.map(
              character => <MiniCard id={ marvelCharacters !== null ? character.id : "Loading..."}
              heroName = { marvelCharacters !== null ? character.name : "Loading..."}
              heroImg = { marvelCharacters !== null ? character.thumbnail.path+".jpg" : "Loading..."}
              />
            )
          } */}
        </WrapperResults>
        <Footer />
      </Wrapper>
    </CharactersContext.Provider>
  )
};

export default Home;