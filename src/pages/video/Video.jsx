import React from 'react';
import './video.css';
import { Card, Stack, Text } from '@mantine/core';

import { videoItems } from '../gallery/mediaItems';

const Video = () => {
  return (
    <div className="video-page">
      <div className="video-page__content">
        {videoItems.map((videoItem) => (
          <Card
            key={videoItem.filename}
            className="video-page__card"
            radius={28}
            shadow="xl"
            p="lg"
          >
            <Stack spacing="sm">
              <div className="video-page__eyebrow">Wedding Video</div>
              <Text className="video-page__title">{videoItem.alt}</Text>
              <Text className="video-page__description">
                Please enjoy these moments of Bao and Trinh in fullscreen.
              </Text>
              <div className="video-page__frame">
                <video
                  className="video-page__player"
                  src={videoItem.src}
                  aria-label={videoItem.alt}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </Stack>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Video;
