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
  DiscordContent,
  DiscordLogo,
  DiscordTitle,
  DiscordIllustrationBox,
  DiscordIllustrationImage,
} from "./HomePageElements";
import { StyledButton, StyledTitle, StyledSubTitle } from "../custom";
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
      <EventsContainer>
        <StyledTitle>Our Events</StyledTitle>
        <StyledSubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </StyledSubTitle>
      </EventsContainer>
      <GamesContainer>
        <StyledTitle>Our Games</StyledTitle>
        <StyledSubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </StyledSubTitle>
      </GamesContainer>
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
