import styled from "styled-components";

// const Button = styled.button`
//   width: 14.2rem;
//   height: 4.2rem;
//   background-color: #EC1D23;
//   border-radius: 50px;
//   border: none;
//   outline: none;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 30px;
//   line-height: 35px;
//   text-align: center;
//   color: white;
// `;

const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: #EC1D23;
  border-radius: 50px;
  border: none;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-align: center;
  color: ${props => props.color};
`;


function Buttom(props){
  return(
    <Button>{props.TextButtom}</Button>
  )
};

export default Buttom;