import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => props.color};
  border-radius: 10px;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.3rem;
  width: ${(props) => props.width};
  border: none;
  margin: 0.5rem;
`;
