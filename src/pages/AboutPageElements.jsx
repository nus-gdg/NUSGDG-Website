import styled from "styled-components";

export const AboutPageContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 3rem;
  position: relative;
  @media only screen and (min-width: 700px) {
    padding: 0 5rem;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0 10rem;
  }
`;

export const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 92vh;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const AboutSectionImg = styled.img`
  width: 100%;
  height: 92vh;
  object-fit: fill;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -100;
`;

export const AboutSectionText = styled.div`
  flex: 2;
  margin-right: 5rem;
  @media only screen and (max-width: 900px) {
    flex: 0;
    margin-right: 0;
    text-align: center;
    margin-top: 3rem;
  }
`;

export const AboutSectionIllustration = styled.img`
  flex: 1;
  width: auto;
  height: 50vh;
  filter: drop-shadow(35px 43px 39px rgba(0, 0, 0, 0.25));
  @media only screen and (min-width: 900px) {
    height: 60vh;
  }
  @media only screen and (min-width: 1200px) {
    height: 80vh;
  }
  @media only screen and (min-width: 1800px) {
    height: 92vh;
  }
`;

export const WhatSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 10rem 0;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    margin: 5rem 0;
  }
`;

export const WhatSectionImg = styled.img`
  width: 30%;
  min-width: 8rem;
  height: 30%;
  order: 1;
  margin-top: 3rem;
  margin-top: 3rem;
  @media only screen and (min-width: 900px) {
    margin-right: 5rem;
    order: 0;
  }
  @media only screen and (min-width: 1200px) {
    width: 15rem;
    height: 15rem;
  }
  @media only screen and (min-width: 1800px) {
    width: 17.5rem;
    height: 17.5rem;
  }
`;

export const WhatSectionText = styled.div`
  text-align: left;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;

export const SectionTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 700px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 3rem;
  }
`;

export const SectionSubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.8rem;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 2rem;
  }
`;

export const WhoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 92vh;
  @media only screen and (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

export const PersonContainers = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem;
  width: 100%;
  margin: 3rem 0;
  @media only screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const BottomSection = styled.div`
  width: 100%;
  height: 60vh;
  @media only screen and (max-width: 900px) {
    height: 40vh;
  }
`;

export const BottomSectionImg = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: fill;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -100;
`;

export const BottomSectionIllustration = styled.img`
  width: 25%;
  height: auto;
  object-fit: fill;
  position: absolute;
  right: 10vw;
  bottom: 0;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
