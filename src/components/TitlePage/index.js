import {Wrapper, Title} from "./styles";

function TitlePage(props){
  return (
    <Wrapper>
      <Title>{props.titlePage}</Title>
    </Wrapper>
  )
}

export default TitlePage;