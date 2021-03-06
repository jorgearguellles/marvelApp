import Hero from "../../img/imgHero.png";

import {Wrapper, ImgHero, TextAddWrapper, TextWrapper, TitleName, HeroName, AddButton, RandomButton} from "./styles";

function Bigcard(){
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
      <RandomButton>Random 3 Heroes</RandomButton>
    </Wrapper>
  )
};

export default Bigcard;