import styled from "styled-components";

const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.redBackG ? "#EC1D23" : "white"};
  border-radius: 50px;
  border-style: ${props => props.borderStyle};
  border-width: ${props => props.borderWidth};
  border-color: ${props => props.borderColor};
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-align: center;
  color: ${props => props.whiteText ?  "white" : "#16202A" };

  &:hover {
    cursor:pointer;
  }
`;

export default Button;