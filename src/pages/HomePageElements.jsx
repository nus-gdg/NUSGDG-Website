import styled from "styled-components";
import banner from "../images/banner.png";
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
