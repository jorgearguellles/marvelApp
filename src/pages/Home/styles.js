import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const WrapperResults = styled.div`
  width: 130rem;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1.5rem auto;
  padding-bottom: 18.3rem;
  overflow: auto;
`;

export { Wrapper,WrapperResults};