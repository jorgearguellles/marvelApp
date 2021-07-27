import Header from "../../components/Header/index";
import TitlePage from "../../components/TitlePage";
import Results from "../../components/Results/index";
import Footer from "../../components/Footer/index";

function Home(){
  return(
    <>
      <Header />
      <TitlePage titlePage="Lista de Héroes"/>
      <Results />
      <Footer />
    </>
  )
};

export default Home;