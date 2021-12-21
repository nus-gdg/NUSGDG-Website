import React from "react";
import {
  PersonImage,
  PersonContainer,
  PersonLink,
  PersonLinks,
  PersonName,
  PersonQuote,
  PersonRole,
} from "../components/PersonElements";

function Person(props) {
  return (
    <PersonContainer>
      <PersonImage src={props.image}/>
      <PersonName>{props.name}</PersonName>
      <PersonRole>{props.role}</PersonRole>
      <PersonQuote>{props.quote}</PersonQuote>
      <PersonLinks>
        <PersonLink href={props.linkedin} target="_blank">
          LinkedIn
        </PersonLink>
        <PersonLink href={props.github} target="_blank">
          GitHub
        </PersonLink>
      </PersonLinks>
    </PersonContainer>
  );
}

export default Person;
