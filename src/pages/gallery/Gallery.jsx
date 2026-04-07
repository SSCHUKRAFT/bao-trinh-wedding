import React, { useEffect, useRef, useState } from 'react';
import './gallery.css';

import { Box, IconButton } from '@mui/material';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import SwipeableViews from 'react-swipeable-views';

const mediaContext = require.context('../../assets/home-photos', false, /\.(jpe?g|png|mp4)$/i);

const mediaTypePriority = {
  image: 0,
  video: 1,
};

const mediaGroupPriority = {
  horizontal: 0,
  vertical: 1,
  vud: 2,
  other: 3,
};

const getMediaType = (filename) => {
  if (/\.mp4$/i.test(filename)) {
    return 'video';
  }

  return 'image';
};

const getMediaGroup = (filename) => {
  const normalizedName = filename.toLowerCase();

  if (normalizedName.startsWith('horizontal')) {
    return 'horizontal';
  }

  if (normalizedName.startsWith('vertical')) {
    return 'vertical';
  }

  if (normalizedName.startsWith('vud')) {
    return 'vud';
  }

  return 'other';
};

const mediaItems = mediaContext
  .keys()
  .map((key) => {
    const filename = key.replace('./', '');
    const type = getMediaType(filename);

    return {
      src: mediaContext(key),
      alt: filename.replace(/\.[^.]+$/, ''),
      type,
      filename,
      group: getMediaGroup(filename),
    };
  })
  .sort((firstItem, secondItem) => {
    const typeDifference =
      mediaTypePriority[firstItem.type] - mediaTypePriority[secondItem.type];

    if (typeDifference !== 0) {
      return typeDifference;
    }

    const groupDifference =
      mediaGroupPriority[firstItem.group] - mediaGroupPriority[secondItem.group];

    if (groupDifference !== 0) {
      return groupDifference;
    }

    return firstItem.filename.localeCompare(secondItem.filename, undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  });

const Gallery = () => {
  const [activeStep, setActiveStep] = useState(0);
  const videoRefs = useRef({});
  const maxSteps = mediaItems.length;

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([index, videoElement]) => {
      if (!videoElement || Number(index) === activeStep) {
        return;
      }

      videoElement.pause();
    });
  }, [activeStep]);

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
          {mediaItems.map((mediaItem, index) => (
            <div className="gallery-slide" key={`${mediaItem.filename}-${index}`}>
              {mediaItem.type === 'image' && (
                <div
                  className="gallery-blurred-bg"
                  style={{ backgroundImage: `url(${mediaItem.src})` }}
                />
              )}
              <div className="gallery-bg-overlay" />

              {mediaItem.type === 'video' ? (
                <video
                  className="gallery-media gallery-video"
                  src={mediaItem.src}
                  aria-label={mediaItem.alt}
                  controls
                  playsInline
                  preload="metadata"
                  ref={(element) => {
                    if (element) {
                      videoRefs.current[index] = element;
                    } else {
                      delete videoRefs.current[index];
                    }
                  }}
                />
              ) : (
                <img
                  className="gallery-media gallery-image"
                  src={mediaItem.src}
                  alt={mediaItem.alt}
                  loading="lazy"
                />
              )}
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
