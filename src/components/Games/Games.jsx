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
//import { Link } from 'react-router-dom';
//"https://itch.io/jam/gamecraft2019/entries"

const Games = ({ data }) => {
    
    return (
        <Container>
            <GameIllustrationBox>
                <GameIllustrationImage/>
            </GameIllustrationBox>
            <GamesContainer>
                <StyledTitle>Our Games</StyledTitle>
                <StyledSubTitle>
                Here are our Annual GameJam winners for the last 3 years and other interesting submissions.
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
                <StyledButton color={Colors.PINK_GRADIENT} width="45%">
                    <a href="https://itch.io/jam/gamecraft2019/entries" target="_blank" rel="noreferrer noopener" style = {{'color':'white'}}>
                        View More Games
                    </a>  
                </StyledButton>
                
            </GamesContainer>
        </Container>
    );
};

export default Games;

