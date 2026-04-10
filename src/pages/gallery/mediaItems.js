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

const allMediaItems = mediaContext
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

export const imageItems = allMediaItems.filter((mediaItem) => mediaItem.type === 'image');
export const videoItems = allMediaItems.filter((mediaItem) => mediaItem.type === 'video');
