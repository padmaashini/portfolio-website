import React, { useEffect, useState } from 'react';

import {
  ImageSliderContainer,
  SliderControls,
  SliderStepButton,
  StyledImage,
} from './ImageSlider.styles';

const IMAGES = [
  '/image-slider/image-slider-1.jpg',
  '/image-slider/image-slider-2.jpg',
  '/image-slider/image-slider-3.jpg',
  '/image-slider/image-slider-4.jpg',
  '/image-slider/image-slider-5.jpg'];

function ImageSlider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex === IMAGES.length ? 1 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageSliderContainer>
      <StyledImage src={IMAGES[sliderIndex - 1]} />
      <SliderControls>
        {IMAGES.map((image, index) => {
          const stepNumber = index + 1;
          const isActive = sliderIndex === stepNumber;

          return (
            <SliderStepButton
              key={image}
              type="button"
              $isActive={isActive}
              onClick={() => setSliderIndex(stepNumber)}
            />
          );
        })}
      </SliderControls>
    </ImageSliderContainer>
  );
}

export default ImageSlider;
