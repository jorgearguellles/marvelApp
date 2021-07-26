import {Wrapper, Title} from "./styles";

function TitleSection(props){
  return (
    <Wrapper>
      <Title>{props.titleSection}</Title>
    </Wrapper>
  )
}

export default TitleSection;