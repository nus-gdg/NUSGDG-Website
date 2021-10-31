import React from "react";
import {
  BannerContainer,
  BannerImage,
  BannerSection,
  BannerSubTitle,
  BannerTitle,
  HomePageContainer,
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
          <StyledButton color={Colors.PURPLE_GRADIENT}>Learn More</StyledButton>
          <StyledButton color={Colors.PINK_GRADIENT}>
            View Our Games
          </StyledButton>
        </BannerSection>
      </BannerContainer>{" "}
      Hello
    </HomePageContainer>
  );
}

export default HomePage;
