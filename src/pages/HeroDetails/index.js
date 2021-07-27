import Header from "../../components/Header/index";
import BigCard from  "../../components/BigCard/index";
import TitleSection from "../../components/TitleSection/index";
import Minicard from "../../components/MiniCard";
import Footer from "../../components/Footer";

import {WrapperCommics, WrapperHeroCommics, WrapperSectionCommics} from "./styles";

function HeroDetails(){
  return(
    <>
      <Header />
      <WrapperHeroCommics>
        <BigCard />
        <WrapperSectionCommics>
          <TitleSection titleSection="Spider-Man aparece en N Commics"/>
          <WrapperCommics>
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
          </WrapperCommics>
        </WrapperSectionCommics>
      </WrapperHeroCommics>
      <Footer />
    </>
  )
};

export default HeroDetails;