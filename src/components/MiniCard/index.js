import Hero from "../../img/imgHero.png";

import {Wrapper, ImgHero, TextAddWrapper, TextWrapper, TitleName, HeroName, AddButton} from "./styles";

function Minicard(){
  return (
    <Wrapper>
      <ImgHero src={Hero}/>
      <TextAddWrapper>
        <TextWrapper>
          <TitleName>Nombre:</TitleName>
          <HeroName>Spider-Man</HeroName>
        </TextWrapper>
        <AddButton>+</AddButton>
      </TextAddWrapper>
    </Wrapper>
  )
};

export default Minicard;