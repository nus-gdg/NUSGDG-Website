import styled from "styled-components";

export const AboutPageContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 10rem;
  position: relative;
`;

export const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 92vh;
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
  flex: 1;
`;

export const AboutSectionIllustration = styled.img`
  flex: 1;
  width: auto;
  height: 92vh;
  filter: drop-shadow(35px 43px 39px rgba(0, 0, 0, 0.25));
`;

export const WhatSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 5rem 0;
`;

export const WhatSectionImg = styled.img`
  width: 17.5rem;
  height: 17.5rem;
  margin-right: 5rem;
`;

export const WhatSectionText = styled.div`
  text-align: left;
  margin: 0;
  padding: 0;
`;

export const SectionTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export const SectionSubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const WhoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 92vh;
`;

export const PersonContainers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5rem;
  width: 100%;
  margin: 3rem 0;
`;

export const BottomSection = styled.div`
  width: 100%;
  height: 60vh;
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
  width: 35rem;
  height: 35rem;
  object-fit: fill;
  position: absolute;
  right: 10vw;
  bottom: 0;
`;
