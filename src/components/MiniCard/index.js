import Hero from "../../img/imgHero.png";

import {Wrapper, ImgHero, TextAddWrapper, TextWrapper, TitleName, HeroName, AddButton} from "./styles";

function Minicard(props){
  return (
    <Wrapper>
      <ImgHero src={Hero}/>
      <TextAddWrapper>
        <TextWrapper>
          <TitleName>Nombre:</TitleName>
          <HeroName>{props.name}</HeroName>
        </TextWrapper>
        <AddButton>+</AddButton>
      </TextAddWrapper>
    </Wrapper>
  )
};

export default Minicard;