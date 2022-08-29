import React from 'react';

import { 
    Container, 
    Title,
    ImageContainer,
    StyledImage,
    InfoContainer
} from './AboutMe.styles';

import ImageSlider from '../ImageSlider/ImageSlider';

const AboutMe = () => {
    return (
        <Container>
            <InfoContainer>
                <Title>About Me</Title>
                <div>
                    Hi there! My name is Padma, I am a third year engineering student at the University of Waterloo. 
                    I am majoring in Biomedical Engineering with an option in Software Engineering. I have done various 
                    co-ops as a software engineer, in the fintech, medical technology, and AI industry. I love problem 
                    solving and building products, specifically in the software industry. I have grown a passion for 
                    development through my internships and school courses, and planning on pursuing a full time career
                    as a software engineer!
                    <br />
                    <br/>
                    I love being in nature and going on walks and hikes! I also love to read, feel free to connect and
                    drop some recommendations :)
                    <br />
                    <br/>
                    <b>Currently seeking internship opportunities for the Winter and Summer terms of 2023!</b>
                </div>
            </InfoContainer>
            <ImageContainer>
                <ImageSlider />
                {/* <StyledImage src='/image-slider-1.jpg' /> */}
            </ImageContainer>
        </Container>
    )
};

export default AboutMe; 