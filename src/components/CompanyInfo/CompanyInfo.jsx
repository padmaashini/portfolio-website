import React from 'react';

import { 
    Container, 
    StyledImage, 
    InfoContainer, 
    CompanyName, 
    Position,
    Text,
    Location
} from './CompanyInfo.styles'

const CompanyInfo = ({ company }) => {
    const { position, name, image, location, points } = company; 

    return (
        <Container>
            <div style={{marginRight: "5%"}}>
                <StyledImage src={image} />
            </div>
            <InfoContainer>
                <span style={{marginBottom: '10px'}}>
                    <Position>
                        {`${position} | `}
                    </Position>
                    <CompanyName>
                        {name}
                    </CompanyName>
                </span>
                <Location><i>{location}</i></Location>
                <ul style={{listStyleType: 'circle', textAlign: 'justify', paddingLeft: '20px'}}>
                    {points.map(point => (
                        <li key={point}>
                            <Text>
                                {point}
                            </Text>
                        </li>
                    ))}      
                </ul>
            </InfoContainer>
        </Container>
    )
}

export default CompanyInfo; 