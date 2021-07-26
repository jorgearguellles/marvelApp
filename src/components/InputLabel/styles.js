import styled from "styled-components";

const Label = styled.label`
  margin-bottom: 2rem;
  display: block;
`;

const Text = styled.span`
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.1rem;
  margin-bottom: 1rem;
  display: block;
  color: #16202A;
`;

const Input = styled.input`
  width: 49rem;
  height: 4.2rem;
  border: 1px solid #EC1D23;
  border-radius: 50px;
  outline: none;
  padding-left: 1.5rem;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.1rem;
`;

export {Label, Text, Input};