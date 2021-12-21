import styled from "styled-components";

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PersonImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 100px;
`;

export const PersonName = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  line-height: 100%;
  margin-top: 1rem;
`;

export const PersonRole = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const PersonQuote = styled.p`
  font-size: 1.3rem;
  margin: 1rem 0;
  text-align: center;
`;

export const PersonLinks = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PersonLink = styled.a`
  font-size: 1.3rem;
  text-decoration: none;
  text-decoration: underline;
  color: black;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;
