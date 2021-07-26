import styled from "styled-components";

const Wrapper = styled.div`
  width: 81.8rem;
  height: 4.2rem;
  background-color: white;
  border: 1px solid #EC1D23;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImgSearch = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 1.1rem;
`;
const Input = styled.input`
  height: 4rem;
  width: 62rem;
  font-size: 2rem;
  font-family: Roboto;
  font-weight: 250;
  padding-left: 2rem;
  border: none;
  outline: none;

`;

const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.redBackG ? "#EC1D23" : "white"};
  border-radius: 50px;
  border: none;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-align: center;
  color: ${props => props.whiteText ?  "white" : "#16202A" };
`;

export {Wrapper, ImgSearch, Input, Button};