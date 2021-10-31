import React from "react";
import {
  BannerContainer,
  BannerImage,
  BannerSection,
  BannerSubTitle,
  BannerTitle,
  EventsContainer,
  GamesContainer,
  HomePageContainer,
  DiscordContainer,
  DiscordIllustration,
  DiscordContent,
  DiscordLogo,
  DiscordTitle,
  DiscordIllustrationBox,
  DiscordIllustrationImage,
} from "./HomePageElements";
import { StyledButton } from "../constants/StyledButton";
import * as Colors from "../constants/Colors";

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
      <EventsContainer></EventsContainer>
      <GamesContainer></GamesContainer>
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
