import React from "react";
import Person from "../components/Person";
import {
  AboutPageContainer,
  AboutSection,
  AboutSectionIllustration,
  AboutSectionImg,
  AboutSectionText,
  BottomSection,
  BottomSectionIllustration,
  BottomSectionImg,
  PersonContainers,
  SectionSubTitle,
  SectionTitle,
  WhatSection,
  WhatSectionImg,
  WhatSectionText,
  WhoSection,
} from "./AboutPageElements";
import aboutIllustration from "../images/about_illustration.png";
import globeIllustration from "../images/globe_illustration.png";
import nusgdgLogo from "../images/nusgdg_logo.png";
import topWave from "../images/top_wave.png";
import bottomWave from "../images/bottom_wave.png";
import persons from "../data/MemberData";

function AboutPage() {
  return (
    <AboutPageContainer>
      <AboutSectionImg src={topWave} />
      <AboutSection>
        <AboutSectionText>
          <SectionTitle>About NUS GDG</SectionTitle>
          <SectionSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </SectionSubTitle>
        </AboutSectionText>
        <AboutSectionIllustration src={aboutIllustration} />
      </AboutSection>
      <WhatSection>
        <WhatSectionImg src={nusgdgLogo} />
        <WhatSectionText>
          <SectionTitle>What we do</SectionTitle>
          <SectionSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </SectionSubTitle>
        </WhatSectionText>
      </WhatSection>
      <WhoSection>
        <SectionTitle>Who we are</SectionTitle>
        <SectionSubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SectionSubTitle>
        <PersonContainers>
          {persons.map((person) => (
            <Person
              name={person.name}
              image={person.image}
              role={person.role}
              quote={person.quote}
              linkedin={person.linkedin}
              github={person.github}
            />
          ))}
        </PersonContainers>
      </WhoSection>
      <BottomSection>
        <BottomSectionImg src={bottomWave} />
        <BottomSectionIllustration src={globeIllustration} />
      </BottomSection>
    </AboutPageContainer>
  );
}

export default AboutPage;
