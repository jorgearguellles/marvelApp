import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const WrapperResults = styled.div`
  width: 130rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1.5rem auto;
  overflow: scroll;
`;

export { Wrapper,WrapperResults};