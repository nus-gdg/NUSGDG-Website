import React from 'react';
import { StyledButton, StyledTitle, StyledSubTitle } from "../../custom"; 
import * as Colors from "../../constants/Colors";
import {
    Container,
    GameIllustrationBox,
    GameIllustrationImage,
    GamesContainer,
    GameWrapper,
    GameCard,
    GameImage,
    GameTitle
} from "./GamesElements";

const Games = ({ data }) => {
    return (
        <Container>
            <GameIllustrationBox>
                <GameIllustrationImage/>
            </GameIllustrationBox>
            <GamesContainer>
                <StyledTitle>Our Games</StyledTitle>
                <StyledSubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </StyledSubTitle>
                <GameWrapper>
                    {data.map((item, index) => {
                        return (
                            <GameCard key={index}>
                                <GameImage autoplay loop muted src={item.img} type='video/webm'/>
                                <GameTitle>{item.title}</GameTitle>
                                {/* <GameDescription>{item.desc}</GameDescription> */}
                            </GameCard>
                        );
                    })}
                </GameWrapper>
                <StyledButton color={Colors.PINK_GRADIENT} width="45%">View More Games</StyledButton>
            </GamesContainer>
        </Container>
    );
};

export default Games;

