import styled from "styled-components";
import eventsIllustration from "../../images/events_illustration.png";

export const Container = styled.div`
    display: flex;
    padding-top: 1rem;
    padding-left: 2rem;
    height: auto;
    justify-content: end;
`;

export const EventsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: start;
    width: 50%;
`;

export const UpperBox = styled.div`
    width: 100%;  
    min-width: 300px;
    margin-bottom: 3rem;
`;

export const LowerBox = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 2rem; 
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
`;

export const EventTitle = styled.div`
    font-weight: bold;
`;

export const Eclipse = styled.div`
    background-color: rgba(114, 136, 255, 0.49);
    filter: blur(228px);
`;