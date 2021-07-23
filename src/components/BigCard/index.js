import styled from "styled-components";
import Hero from "../../img/imgHero.png";

const Wrapper = styled.div`
  width: 35rem;
  height: 65rem;
`;
const ImgHero = styled.img`
  width: 35rem;
  height: 51.3rem;
`;
const TextAddWrapper = styled.div`
  width: 35rem; 
  height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  
`;
const TextWrapper = styled.div``;
const TitleName = styled.p`
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
`;
const HeroName = styled.p`
  font-weight: 300;
  font-size: 25px;
  line-height: 29px;
`;
const AddButton = styled.button`
  width: 5.1rem;
  height: 5.1rem;
  border: none;
  border-radius: 5rem;
  background-color: #EC1D23;
  color: white;
  font-size: 3.5rem;

  &:hover{
    cursor: pointer;
  }
`;
const RandomButton = styled.button`
  width: 350px;
  height: 42px;
  font-size: 18px;
  line-height: 21px;
  border: none;
  border-radius: 5rem;
  outline: none;
  background-color: #EC1D23;
  color: white;


  &:hover{
    cursor: pointer;
  }
`;


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