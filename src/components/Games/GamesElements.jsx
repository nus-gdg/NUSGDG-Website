import styled from "styled-components";
import gamesIllustration from "../../images/games_illustration.png";

export const Container = styled.div`
    display: flex;
    padding: 5rem 4rem 15rem; 
    height: auto;  
`;

export const GamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;

    @media screen and (max-width: 1350px) {
        width: 100%;    
    }
`;

export const GameWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 30%));
    margin-bottom: 2rem;
    grid-gap: 2rem;
    justify-content: center;
`;

export const GameCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

export const GameImage = styled.video`
    width: 100%;
    height: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    overflow: hidden;
    margin-bottom: 5px;
    border-radius: 15px;

    box-shadow: rgb(0 0 0 / 30%) 0px 26px 30px -10px;
    transition: all 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 50%) 0px 40px 50px -16px;
    }
`;

export const GameTitle = styled.div`
    font-weight: bold;
`;

export const GameDescription = styled.div`

`;

export const GameIllustrationImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${gamesIllustration});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 3rem;
`;

export const GameIllustrationBox = styled.div`
    position: relative;
    width: 40%;

    @media screen and (max-width: 1350px) {
        display: none;
    }
`;
