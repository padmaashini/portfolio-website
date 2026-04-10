/* eslint-disable max-len */
import React from 'react';

import {
  Container,
  Title,
  ImageContainerLarge,
  ImageContainerSmall,
  InfoContainer,
} from './AboutMe.styles';

import ImageSlider from '../ImageSlider/ImageSlider';

function AboutMe() {
  return (
    <Container>
      <InfoContainer>
        <Title>About Me</Title>
        <ImageContainerSmall>
          <ImageSlider />
        </ImageContainerSmall>
        <div>
          Hi there! I am Padma, I am currently a Software Engineer at Fivetran working on interesting AI projects and reverse-ETL pipelines.
          I graduated from the University of Waterloo with a major in Biomedical Engineering and an option in Software Engineering.
          I've done some pretty cool internships in fintech, medical technology, data engineering, and manufacturing AI. 
          <br />
          <br />
          I enjoy running, being in nature, exploring restaurants, and travelling!
          Here are some nature photos I took :)
          <br />
          <br />
        </div>
      </InfoContainer>
      <ImageContainerLarge>
        <ImageSlider />
      </ImageContainerLarge>
    </Container>
  );
}

export default AboutMe;
