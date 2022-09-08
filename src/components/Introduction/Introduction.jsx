import React from 'react';

import {
  Container,
  Title,
  ImageContainer,
  NameAndLinksContainer,
  StyledImage,
  StyledLine,
  SubTitle,
} from './Introduction.styles';
import IconLinks from '../IconsContainer/IconLinks';

function Introduction() {
  return (
    <Container>
      <ImageContainer>
        <StyledImage src="/padma-portfolio.jpg" />
      </ImageContainer>
      <NameAndLinksContainer>
        <Title>PADMAASHINI SUKUMARAN</Title>
        <StyledLine />
        <SubTitle>SOFTWARE ENGINEER</SubTitle>
        <IconLinks />
      </NameAndLinksContainer>
    </Container>
  );
}

export default Introduction;
