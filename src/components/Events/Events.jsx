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
    Eclipse
} from "./EventsElements";

function Events() {
    return (
        <Container>
            <EventsContainer>
                <StyledTitle>Our Events</StyledTitle>
                <StyledSubTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </StyledSubTitle>
                <UpperBox>
                    <EventBox>
                        <EventImage src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                        <EventTitle>Event 1</EventTitle>
                    </EventBox>
                </UpperBox>
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
                <StyledButton color={Colors.PURPLE_GRADIENT} width="45%">View More Events</StyledButton>  
            </EventsContainer>
            <EventIllustrationBox>
                <EventIllustrationImage/>
                <Eclipse></Eclipse>
            </EventIllustrationBox>
      </Container>
    )
}

export default Events

