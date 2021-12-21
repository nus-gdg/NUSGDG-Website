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
          The National University of Singapore Games Development Group, 
          also known as NUS GDG is a student interest group commited to raising community awareness about game development. 
          We delve into depths of game making and seek to make game development an activity that everyone can enjoy.
          </SectionSubTitle>
        </AboutSectionText>
        <AboutSectionIllustration src={aboutIllustration} />
      </AboutSection>
      <WhatSection>
        <WhatSectionImg src={nusgdgLogo} />
        <WhatSectionText>
          <SectionTitle>What we do</SectionTitle>
          <SectionSubTitle>
          We hold weekly sessions teaching students the basics on how to make games. 
          We also hold GameCraft, an annual game jam, giving students the opportunities to collaborate and create a game in a week.
          </SectionSubTitle>
        </WhatSectionText>
      </WhatSection>
      <WhoSection>
        <SectionTitle>Who we are</SectionTitle>
        <SectionSubTitle>
          Our motto is "Learn, Design, Create". 
          We aim to help beginners kickstart their game development journey and provide a community for aspiring game developers to learn and connect with each other.
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
        <SectionSubTitle>
          Near the start of each calendar year, we also run <b>Hack&Roll</b>,
          the largest student-run hackathon in Singapore. <b>Hack&Roll</b> is
          unique for being one of the few hackathons, if not the only, that do
          not have a set topic for participants; instead, the aim is to simply
          encourage people to come and have fun building something.
        </SectionSubTitle>
      </WhoSection>
      <BottomSection>
        <BottomSectionImg src={bottomWave} />
        <BottomSectionIllustration src={globeIllustration} />
      </BottomSection>
    </AboutPageContainer>
  );
}

export default AboutPage;
