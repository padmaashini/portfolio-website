import React from 'react';
import PropTypes from 'prop-types';

import {
  CompanyInfoContainer,
  StyledImage,
  InfoContainer,
  ImageContainer,
  CompanyName,
  Position,
  Point,
  Location,
  UnOrderedList,
} from './CompanyInfo.styles';

function CompanyInfo({ company }) {
  const {
    position, name, image, location, points,
  } = company;

  return (
    <CompanyInfoContainer>
      <ImageContainer>
        <StyledImage src={image} />
      </ImageContainer>
      <InfoContainer>
        <Position>
          {`${position} | `}
        </Position>
        <CompanyName>
          {name}
        </CompanyName>
        <Location>{location}</Location>
        <UnOrderedList>
          {points.map((point) => (
            <Point key={[point.substring(0, 10).replace(/\s+/g, ''), point.slice(-5)].join('')}>
              {point}
            </Point>
          ))}
        </UnOrderedList>
      </InfoContainer>
    </CompanyInfoContainer>
  );
}

CompanyInfo.propTypes = {
  company: PropTypes.shape({
    position: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CompanyInfo;
