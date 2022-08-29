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
} from './Experience.styles';
import CompanyInfo from '../CompanyInfo/CompanyInfo';

const Introduction = () => {
    return (
        <Container>
            <div>
                <Title>Experience</Title>
                <CompanyInfo />
            </div>
            {/* <ImageContainer>
                <StyledImage src='/image-slider-1.jpg' />
            </ImageContainer> */}
        </Container>
    )
};

export default Introduction; 