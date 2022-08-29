import React from 'react';

import { 
    Container, 
    StyledImage, 
    InfoContainer, 
    CompanyName, 
    Text 
} from './CompanyInfo.styles'

const CompanyInfo = ({ company }) => {
    const { position, name, image, location, points } = company; 

    return (
        <Container>
            <div style={{marginRight: "5%"}}>
                <StyledImage src={image} />
            </div>
            <InfoContainer>
                <CompanyName>
                    {name}
                </CompanyName>
                <Text><i>{location}</i></Text>
                <ul style={{listStyleType: 'circle', textAlign: 'left', paddingLeft: '20px'}}>
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