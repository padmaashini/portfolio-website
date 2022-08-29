import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider';

import {
    ImageSliderContainer,
    StyledImage
} from './ImageSlider.styles';

const IMAGES = ['/image-slider-1.jpg', '/image-slider-2.jpeg', '/image-slider-3.jpg', '/image-slider-4.jpg', '/image-slider-5.jpg']
  
const ImageSlider = () => {
    const [sliderIndex, setSliderIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            incrementSliderIndex();
        }, 5000);
        
        return () => clearInterval(interval);
    }, [])

    const handleSliderIndexChange = (event, newValue) => 
        setSliderIndex(newValue);
    

    const incrementSliderIndex = () => 
        setSliderIndex((prevIndex) => prevIndex === IMAGES.length ? 1 : prevIndex + 1);
    

    return (
        <ImageSliderContainer>
            <StyledImage src={IMAGES[sliderIndex - 1]} />
            <Box sx={{ width: 300 }}>
                <Slider 
                    aria-label="image-slider"
                    valueLabelDisplay='auto'
                    value={sliderIndex}
                    onChange={handleSliderIndexChange}
                    step={1}
                    marks
                    min={1}
                    max={5}
                />
            </Box>
        </ImageSliderContainer>
    )
}

export default ImageSlider; 