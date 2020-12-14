import React from 'react';
import * as Styled from './image.styled';
import { Box, BoxProps } from '../Box';

export type ImageProps = {
  image: string;
  width?: number;
  height?: number;
} & BoxProps;

export const Image = (props: ImageProps) => {
  const { image, width, height } = props;
  return (
    <Box {...props}>
      <Styled.ImageContainer
        source={{ uri: image }}
        width={width}
        height={height}
        testID="sommelier-image"
      />
    </Box>
  );
};
