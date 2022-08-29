import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

import { 
    Container, 
    Title,
    ImageContainer,
    NameAndLinksContainer,
    StyledImage,
    IconLink,
    IconsContainer,
    StyledLine
} from './AboutMe.styles';

const Introduction = () => {
    return (
        <Container>
            <div>
                <Title>About Me</Title>
                <div style={{textAlign: 'left', marginRight: '5%'}}>
                    Hi there! My name is Padma, I am a third year engineering student at the University of Waterloo. I am majoring in Biomedical Engineering with an 
                    option in Software Engineering. I love problem solving and building products, especially in the software industry. 
                    <br />
                    <br/>
                    I love being in nature, going on walks, and reading! 
                </div>
            </div>
            <ImageContainer>
                <StyledImage src='/image-slider-1.jpg' />
            </ImageContainer>
        </Container>
    )
};

export default Introduction; 