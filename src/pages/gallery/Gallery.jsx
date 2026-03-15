import React, { useState } from 'react';
import './gallery.css';

import { Box, IconButton, MobileStepper } from '@mui/material';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import SwipeableViews from 'react-swipeable-views';

import Horizontal1 from '../../assets/home-photos/horizontal1.jpg';
import Horizontal2 from '../../assets/home-photos/horizontal2.jpg';
import Horizontal3 from '../../assets/home-photos/horizontal3.jpeg';
import Horizontal4 from '../../assets/home-photos/horizontal4.jpeg';
import Vertical1 from '../../assets/home-photos/vertical1.jpg';
import Vertical2 from '../../assets/home-photos/vertical2.jpg';
import Vertical3 from '../../assets/home-photos/vertical3.jpeg';
import Vertical4 from '../../assets/home-photos/vertical4.jpeg';
import Vertical5 from '../../assets/home-photos/vertical5.jpeg';
import Vertical6 from '../../assets/home-photos/vertical6.jpeg';
import Vertical7 from '../../assets/home-photos/vertical7.jpeg';
import Vertical8 from '../../assets/home-photos/vertical8.jpeg';
import Vertical9 from '../../assets/home-photos/vertical9.jpeg';
import Vertical10 from '../../assets/home-photos/vertical10.jpeg';
import Vertical11 from '../../assets/home-photos/vertical11.jpeg';
import Vertical12 from '../../assets/home-photos/vertical12.jpeg';
import Vertical13 from '../../assets/home-photos/vertical13.jpeg';
import Vertical14 from '../../assets/home-photos/vertical14.jpeg';
import Vertical15 from '../../assets/home-photos/vertical15.jpeg';
import Vertical16 from '../../assets/home-photos/vertical16.jpeg';
import Vertical17 from '../../assets/home-photos/vertical17.jpeg';
import Vertical18 from '../../assets/home-photos/vertical18.jpeg';
import Vertical19 from '../../assets/home-photos/vertical19.jpeg';

const images = [
  { src: Horizontal1, alt: 'Gallery photo 1' },
  { src: Horizontal2, alt: 'Gallery photo 2' },
  { src: Vertical1, alt: 'Gallery photo 3' },
  { src: Vertical2, alt: 'Gallery photo 4' },
  { src: Vertical3, alt: 'Gallery photo 5' },
  { src: Vertical4, alt: 'Gallery photo 6' },
  { src: Vertical5, alt: 'Gallery photo 7' },
  { src: Vertical6, alt: 'Gallery photo 8' },
  { src: Vertical7, alt: 'Gallery photo 9' },
  { src: Vertical8, alt: 'Gallery photo 10' },
  { src: Vertical9, alt: 'Gallery photo 11' },
  { src: Vertical10, alt: 'Gallery photo 12' },
  { src: Vertical11, alt: 'Gallery photo 13' },
  { src: Vertical12, alt: 'Gallery photo 14' },
  { src: Vertical13, alt: 'Gallery photo 15' },
  { src: Vertical14, alt: 'Gallery photo 16' },
  { src: Vertical15, alt: 'Gallery photo 17' },
  { src: Vertical16, alt: 'Gallery photo 18' },
  { src: Vertical17, alt: 'Gallery photo 19' },
  { src: Vertical18, alt: 'Gallery photo 20' },
  { src: Vertical19, alt: 'Gallery photo 21' },
  { src: Horizontal3, alt: 'Gallery photo 22' },
  { src: Horizontal4, alt: 'Gallery photo 23' },
];

const Gallery = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

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
          {images.map((image, index) => (
            <div className="gallery-slide" key={index}>
              <div
                className="gallery-blurred-bg"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="gallery-bg-overlay" />

              <img
                className="gallery-image"
                src={image.src}
                alt={image.alt}
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

        <div className="gallery-controls-overlay">
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={null}
            backButton={null}
            className="gallery-stepper"
          />
        </div>
      </Box>
    </div>
  );
};

export default Gallery;