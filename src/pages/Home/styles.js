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
  margin: auto;
  padding-bottom: 15rem;
  overflow: auto;

  &::-webkit-scrollbar {
    // background: rgba(0, 0, 0, 0.5);
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: white; 
    cursor: pointer;
    border-radius: 5rem;

  }

`;

export { Wrapper,WrapperResults};