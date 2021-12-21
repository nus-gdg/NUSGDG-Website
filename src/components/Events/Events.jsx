import React from 'react';
import { StyledButton, StyledTitle, StyledSubTitle } from "../../custom"; 
import * as Colors from "../../constants/Colors";
import {
    Container,
    EventsContainer,
    UpperBox,
    LowerBox,
    EventBox,
    EventImage,
    EventIllustrationBox,
    EventIllustrationImage,
    EventTitle,
    Eclipse,
    StyledCarousel,
    AltBox
} from "./EventsElements";

function Events() {
    return (
        <Container>
            <EventsContainer>
                <StyledTitle>Our Events</StyledTitle>
                <StyledSubTitle>
                    Here are our upcoming events for the next 3-6 months.
                </StyledSubTitle>
                <UpperBox>
                    <EventBox>
                        <EventImage src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                        <EventTitle>Event 1</EventTitle>
                    </EventBox>
                </UpperBox>
                <StyledCarousel showArrows={false} autoPlay={true} showStatus={false} infiniteLoop={true}>
                        <EventBox>
                            <EventImage src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                            <EventTitle>Event 1</EventTitle>
                        </EventBox>  
                        <EventBox>
                            <EventImage src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                            <EventTitle>Event 2</EventTitle>
                        </EventBox>  
                        <EventBox>
                            <EventImage src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                            <EventTitle>Event 3</EventTitle>
                        </EventBox>  
                        <EventBox>
                            <EventImage src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                            <EventTitle>Event 4</EventTitle>
                        </EventBox> 
                </StyledCarousel>
                <LowerBox>
                    <EventBox>
                        <EventImage src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                        <EventTitle>Event 2</EventTitle>
                    </EventBox>  
                    <EventBox>
                        <EventImage src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                        <EventTitle>Event 3</EventTitle>
                    </EventBox>  
                    <EventBox>
                        <EventImage src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                        <EventTitle>Event 4</EventTitle>
                    </EventBox>
                </LowerBox>
                <StyledButton color={Colors.PURPLE_GRADIENT} width="45%">
                    <a href="https://www.instagram.com/nusgdg/?hl=en" target="_blank" rel="noreferrer noopener" style = {{'color':'white'}}>
                        View More Events
                    </a>
                </StyledButton>  
            </EventsContainer>
            <EventIllustrationBox>
                <EventIllustrationImage/>
                <Eclipse></Eclipse>
            </EventIllustrationBox>
      </Container>
    )
}

export default Events

