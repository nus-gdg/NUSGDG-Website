import styled from "styled-components";
import banner from "../images/banner.png";
import discordIllustration from "../images/Saly-10.png";
import discordLogo from "../images/discord.png";
import * as Colors from "../constants/Colors";

export const HomePageContainer = styled.div`
  background: pink;
  width: 100%;
  height: auto;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${banner});
  background-size: cover;
`;

export const BannerSection = styled.div`
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  padding: 1rem 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BannerTitle = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export const BannerSubTitle = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const EventsContainer = styled.div``;

export const GamesContainer = styled.div``;

export const DiscordContainer = styled.div`
  background: ${Colors.DISCORD};
  padding: 1rem 2rem;
  height: 17.5rem;
  display: flex;
  align-items: center;
  position: relative;
`;

export const DiscordIllustrationBox = styled.div`
  width: 40rem;
  height: 30rem;
  position: absolute;
  bottom: 0;
  left: 5rem;
`;

export const DiscordIllustrationImage = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${discordIllustration});
  background-size: cover;
`;

export const DiscordContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 20rem;
`;

export const DiscordTitle = styled.p`
  color: white;
  font-size: 2.5rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
`;

export const DiscordLogo = styled.img`
  background-image: url(${discordLogo});
  background-size: cover;
  width: 5rem;
  height: 5rem;
`;
