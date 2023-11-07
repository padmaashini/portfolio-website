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
          Hi there! My name is Padma, I am a final year engineering student at the University of Waterloo.
          I am majoring in Biomedical Engineering with an option in Software Engineering. I have done various
          internships as a Software Engineer, including in the fintech, medical technology, data engineering, and AI industry. I love problem
          solving and building products, specifically in the software industry. I have grown a passion for
          development through my internships and school courses, and am pursuing a full time career
          as a software engineer!
          <br />
          <br />
          I love travelling, being in the nature, and going on walks and hikes!
          Here are some cool nature photos I took! :)
          <br />
          <br />
          <br />
          <b>Currently seeking full time, new grad opportunities for 2024!</b>
        </div>
      </InfoContainer>
      <ImageContainerLarge>
        <ImageSlider />
      </ImageContainerLarge>
    </Container>
  );
}

export default AboutMe;
