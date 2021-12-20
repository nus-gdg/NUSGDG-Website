import React from "react";
import {
  BannerContainer,
  BannerImage,
  BannerSection,
  BannerSubTitle,
  BannerTitle,
  HomePageContainer,
  DiscordContainer,
  DiscordContent,
  DiscordLogo,
  DiscordTitle,
  DiscordIllustrationBox,
  DiscordIllustrationImage,
} from "./HomePageElements";
import { StyledButton } from "../custom";
import * as Colors from "../constants/Colors";
import Events from "../components/Events/Events";
import Games from "../components/Games/Games";
import { gameData } from "../components/Games/data";

function HomePage() {
  return (
    <HomePageContainer>
      <BannerContainer>
        <BannerImage />
        <BannerSection>
          <BannerTitle>Build Worlds, Create Games</BannerTitle>
          <BannerSubTitle>NUS Game Development Group</BannerSubTitle>
          <StyledButton color={Colors.PURPLE_GRADIENT} width="15rem">
            Learn More
          </StyledButton>
          <StyledButton color={Colors.PINK_GRADIENT} width="15rem">
            View Our Games
          </StyledButton>
        </BannerSection>
      </BannerContainer>
      <Events/>
      <Games data={gameData}/>
      <DiscordContainer>
        <DiscordIllustrationBox>
          <DiscordIllustrationImage />
        </DiscordIllustrationBox>
        <DiscordContent>
          <DiscordLogo />
          <DiscordTitle>Join us on Discord now!</DiscordTitle>
          <StyledButton color={Colors.BLUE_GRADIENT} width="20rem">
            Join our Discord Server
          </StyledButton>
        </DiscordContent>
      </DiscordContainer>
    </HomePageContainer>
  );
}

export default HomePage;
