import styled from "styled-components";
import eventsIllustration from "../../images/events_illustration.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



export const Container = styled.div`
    display: flex;
    padding: 1rem 4rem;
    height: auto;
    justify-content: end;
`;

export const EventsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: start;
    width: 55%;
    
    @media screen and (max-width: 1350px) {
        width: 100%;    
    }
`;

export const UpperBox = styled.div`
    width: 100%;  
    margin-bottom: 3rem;

    @media screen and (max-width: 1350px) {
        display: none;
    }
`;

export const LowerBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 30%));
    justify-content: center;
    grid-gap: 2rem;
    margin-bottom: 2rem; 

    @media screen and (max-width: 1350px) {
        display: none;
    }
`;

export const EventBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    img {
        width: 100%;
        height:100%;
        object-fit: cover;
        border-radius: 15px;
    }    
`;

export const EventIllustrationImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${eventsIllustration});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 5rem;
`;

export const EventIllustrationBox = styled.div`
    position: relative;
    width: 40%;
    height: auto;
    top: 8rem;
    
    @media screen and (max-width: 1350px) {
        display: none;   
    }
`;

export const EventImage = styled.img`
    margin-bottom: 10px;
    aspect-ratio: 4/3; 
    box-shadow: rgb(0 0 0 / 30%) 0px 26px 30px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 50%) 0px 40px 50px -16px;
    }

    @media screen and (max-width: 1350px) {
        box-shadow: none;
    }
`;

export const EventTitle = styled.div`
    font-weight: bold;
`;

export const Eclipse = styled.div`
    background-color: rgba(114, 136, 255, 0.49);
    filter: blur(228px);
`;

export const StyledCarousel = styled(Carousel)`
    display: none;
    width: 70%;
    max-width: 800px;

    @media screen and (max-width: 1350px) {
        display: inline;
    }
`;
