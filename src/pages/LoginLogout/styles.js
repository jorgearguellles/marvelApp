import styled from "styled-components";

const Logo = styled.img`
  width: 30rem;
  height: 13rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto; 
  padding: 6rem;
`;

const WrapperForm = styled.form`
  width: 57rem;
  height: 50.3rem;
  margin-top: 3rem;
  padding-top: 4rem;
  border: 1px solid #EC1D23;
  border-radius: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative;
`;

const Title = styled.p`
  color: red;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 3rem;
`;


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

const Text = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #16202A;
  position: absolute;
  left: 4rem;
  bottom: 5rem;
  
`;

const WrapperRS = styled.div`
  width: 49rem;
  display: flex;
  justify-content: space-between;
  margin: 2.5rem;
`;


export {Logo, Wrapper, WrapperForm, WrapperRS, Title, Button, Text};