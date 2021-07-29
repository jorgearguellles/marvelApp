import {Wrapper, ImgHero, TextAddWrapper, TextWrapper, TitleName, HeroName, AddButton} from "./styles";

function Minicard(props){
  return (
    <Wrapper>
      <ImgHero src={props.heroImg}/>
      <TextAddWrapper>
        <TextWrapper>
          <TitleName>Nombre:</TitleName>
          <HeroName>{props.heroName}</HeroName>
        </TextWrapper>
        <AddButton>+</AddButton>
      </TextAddWrapper>
    </Wrapper>
  )
};

export default Minicard;