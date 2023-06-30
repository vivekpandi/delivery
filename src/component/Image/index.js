import React from 'react';
import FastImage from 'react-native-fast-image';

/**
 * Component for display local image and network image
 */

const LocalImageView = ({children, style, imagePath}) => (
  <FastImage
    style={style}
    source={imagePath}
    resizeMode={FastImage.resizeMode.stretch}>
    {children ? children : null}
  </FastImage>
);

const NetworkImageView = ({style, imagePath}) => (
  <FastImage
    style={style}
    source={{
      uri: imagePath,
      priority: FastImage.priority.high,
    }}
  />
);

export {LocalImageView, NetworkImageView};
