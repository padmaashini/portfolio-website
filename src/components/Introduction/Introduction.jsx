import React from 'react';

import { 
    Container, 
    Title,
    ImageContainer,
    NameAndLinksContainer,
    StyledImage 
} from './Introduction.styles';

const Introduction = () => {
    return (
        <Container>
            <ImageContainer>
                <StyledImage src="/padma-portfolio.jpg" />
            </ImageContainer>
            <NameAndLinksContainer>
                <Title>PADMAASHINI SUKUMARAN</Title>
                <hr/>
            </NameAndLinksContainer>
        </Container>
    )
};

export default Introduction; 