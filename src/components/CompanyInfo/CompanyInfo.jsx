import React from 'react';

import { 
    Container, 
    StyledImage, 
    InfoContainer, 
    CompanyName, 
    Text 
} from './CompanyInfo.styles'

const CompanyInfo = () => {

    return (
        <Container>
            <StyledImage src="/rb-logo2.jpeg" />
            <InfoContainer>
                <CompanyName>
                    Remitbee
                </CompanyName>
                <Text><i>Mississuage, Ontario</i></Text>
                <ul style={{listStyleType: 'circle', textAlign: 'left', paddingLeft: '20px'}}>
                    <li>
                        <Text>
                        Developed REST endpoints in Python FastAPI microservices to allow customers to visualize data in 3D formats
                        </Text>
                    </li>
                    <li>
                        <Text>
                        Developed new functions for splitting training-testing data across various microservices in the ML pipelin
                        </Text>
                    </li>
                        
                        
                </ul>
            </InfoContainer>
        </Container>
    )
}

export default CompanyInfo; 