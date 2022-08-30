import React from 'react';

import { 
    CompanyInfoContainer, 
    StyledImage, 
    InfoContainer, 
    ImageContainer,
    CompanyName, 
    Position,
    Point,
    Location,
    UnOrderedList
} from './CompanyInfo.styles'

const CompanyInfo = ({ company }) => {
    const { position, name, image, location, points } = company; 

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
                    {points.map((point, index) => (
                        <Point key={index}>
                            {point}
                        </Point>
                    ))}      
                </UnOrderedList>
            </InfoContainer>
        </CompanyInfoContainer>
    )
}

export default CompanyInfo; 