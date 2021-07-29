import Header from "../../components/Header/index";
import TitlePage from "../../components/TitlePage";
import MiniCard from "../../components/MiniCard/index";
import {Wrapper ,WrapperResults} from "./styles";
import Footer from "../../components/Footer/index";

function Home(){
  return(
    <Wrapper>
      <Header />
      <TitlePage titlePage="Lista de Héroes"/>
      <WrapperResults>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </WrapperResults>
      <Footer />
    </Wrapper>
  )
};

export default Home;