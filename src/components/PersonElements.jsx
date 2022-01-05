import styled from "styled-components";

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PersonImage = styled.img`
  width: 40%;
  min-width: 7rem;
  height: auto;
  border-radius: 100px;
  @media only screen and (max-width: 900px) {
    width: 25%;
  }
`;

export const PersonName = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  line-height: 100%;
  margin-top: 1rem;
  @media only screen and (min-width: 700px) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.6rem;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 1.75rem;
  }
`;

export const PersonRole = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 700px) {
    font-size: 1.3rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 1.5rem;
  }
`;

export const PersonQuote = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  text-align: center;
  @media only screen and (min-width: 700px) {
    font-size: 1.3rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 1.5rem;
  }
`;

export const PersonLinks = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PersonLink = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  text-decoration: underline;
  color: black;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  @media only screen and (min-width: 700px) {
    font-size: 1.3rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 1.5rem;
  }
`;
