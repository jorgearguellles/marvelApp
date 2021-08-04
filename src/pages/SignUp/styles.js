import styled from "styled-components";

const Logo = styled.img`
  width: 20rem;
  height: 10rem;
  margin: 4rem 0;
`;

const Wrapper = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperForm = styled.form`
  max-width: 60rem;
  width: 90%;
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
  margin-bottom: 1rem;
  text-align: center;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2.1rem;
  color: #16202A;
  margin-top: 2rem;
`;

const TextSignUp = styled(Text)`
  color: white;
`;

const WrapperRS = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;


export {Logo, Wrapper, WrapperForm, WrapperRS, Title, Text, TextSignUp};