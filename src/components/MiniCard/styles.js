import styled from "styled-components";

const Wrapper = styled.div`
  width: 16.3rem;
  height: 28.1rem;
  margin: 2rem 4rem 0rem;

`;
const ImgHero = styled.img`
width: 16rem;
height: 23.9rem;
`;
const TextAddWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 0.1rem;

`;

const TextWrapper = styled.div``;
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

&:hover{
  cursor: pointer;
}
`;

export {Wrapper, ImgHero, TextAddWrapper, TextWrapper, TitleName, HeroName, AddButton};