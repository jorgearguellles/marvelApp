import styled from "styled-components"

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

const WrapperInfo = styled.div`
  max-width: 60rem;
  width: 90%;
  height: 39rem;
  padding: 4rem;
  margin-bottom: 4rem;
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

export {Wrapper, WrapperInfo, Title, Logo};