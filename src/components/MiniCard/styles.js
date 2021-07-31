import styled from "styled-components";

const Wrapper = styled.div`
  width: 20.3rem;
  height: 31rem;
  margin: 1rem 2rem 0rem;
  overflow: hidden;
  flex-shrink: 0;
`;

const ImgHero = styled.img`
  width: 20.3rem;
  height: 23.9rem;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border: 1px solid white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  &:hover{
    cursor: pointer;
  }
`;
const TextAddWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.5rem;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid white;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const TextWrapper = styled.div`
 
`;
const TitleName = styled.p`
font-weight: bold;
font-size: 1.8rem;
line-height: 2.1rem;
`;
const HeroName = styled.p`
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.1rem;
`;
const AddButton = styled.button`
width: 3rem;
height: 3rem;
border: none;
border-radius: 5rem;
background-color: #EC1D23;
color: white;
font-weight: bold;
font-size: 3rem;
line-height: 2.5rem;
flex-shrink: 0;

&:hover{
  cursor: pointer;
}
`;

export {Wrapper, ImgHero, TextAddWrapper, TextWrapper, TitleName, HeroName, AddButton};