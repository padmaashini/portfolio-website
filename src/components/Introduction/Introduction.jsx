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
} from './Introduction.styles';

const Introduction = () => {
    return (
        <Container>
            <ImageContainer>
                <StyledImage src="/padma-portfolio.jpg" />
            </ImageContainer>
            <NameAndLinksContainer>
                <Title>PADMAASHINI SUKUMARAN</Title>
                
                <StyledLine />
                SOFTWARE ENGINEER
                <IconsContainer>
                    <IconLink target="_blank" href="https://www.linkedin.com/in/padmaashini-sukumaran/">
                        <LinkedInIcon fontSize="large" color="black" style={{fill: 'black'}}/>
                    </IconLink>
                    <IconLink target="_blank" href="https://www.linkedin.com/in/padmaashini-sukumaran/">
                        <EmailIcon  fontSize="large" style={{fill: 'black'}}/>
                    </IconLink>
                    <IconLink target="_blank" href="https://www.linkedin.com/in/padmaashini-sukumaran/">
                        <DescriptionIcon fontSize="large" style={{fill: 'black'}}/>
                    </IconLink>
                    <IconLink target="_blank" href="https://www.linkedin.com/in/padmaashini-sukumaran/">
                        <img src="/github-32.png" style={{fill: 'black'}}/>
                    </IconLink>
                </IconsContainer>
            </NameAndLinksContainer>
        </Container>
    )
};

export default Introduction; 