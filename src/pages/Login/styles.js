import styled from "styled-components";

const Logo = styled.img`
  width: 20rem;
  height: 10rem;
  margin: 4rem 0;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperForm = styled.form`
  width: 60rem;
  height: 47rem;
  padding: 4rem;
  border: 1px solid #EC1D23;
  border-radius: 50px;
  background-color: white;
`;

const Title = styled.p`
  color: red;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 3rem;
  text-align: center;
`;


const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: 30rem;
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
  font-size: 1.5rem;
  line-height: 2.1rem;
  color: #16202A;
  margin-top: 3rem;
`;

const TextSignUp = styled(Text)`
  color: white;
`;

const WrapperRS = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;


export {Logo, Wrapper, WrapperForm, WrapperRS, Title, Button, Text, TextSignUp};