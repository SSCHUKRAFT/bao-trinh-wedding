import React, { useState } from 'react';
import './gallery.css';

import { Box, IconButton } from '@mui/material';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import SwipeableViews from 'react-swipeable-views';
import { imageItems } from './mediaItems';

const Gallery = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = imageItems.length;

  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="gallery-page">
      <Box className="gallery-container">
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          resistance
          className="gallery-swipe-wrapper"
        >
          {imageItems.map((mediaItem, index) => (
            <div className="gallery-slide" key={`${mediaItem.filename}-${index}`}>
              <div
                className="gallery-blurred-bg"
                style={{ backgroundImage: `url(${mediaItem.src})` }}
              />
              <div className="gallery-bg-overlay" />

              <img
                className="gallery-media gallery-image"
                src={mediaItem.src}
                alt={mediaItem.alt}
                loading="lazy"
              />
            </div>
          ))}
        </SwipeableViews>

        <IconButton
          onClick={handleBack}
          disabled={activeStep === 0}
          className="gallery-arrow gallery-arrow-left"
        >
          <BiArrowToLeft />
        </IconButton>

        <IconButton
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          className="gallery-arrow gallery-arrow-right"
        >
          <BiArrowToRight />
        </IconButton>
      </Box>
    </div>
  );
};

export default Gallery;
