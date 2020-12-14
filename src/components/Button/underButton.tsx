import React from 'react';
import * as Styled from './button.styled';
import { theme } from '../../theme';
import { COLOR_KEYS } from '../../theme/colors';

type Props = {
  width?: number;
  height?: number;
  borderRadius?: number;
  shadowWidth?: number;
  shadowHeight?: number;
  shadowOpacity?: number;
  shadowColor?: keyof typeof theme.colors;
  top?: number;
};

const UnderscoreButton = ({
  width,
  height,
  borderRadius,
  shadowWidth,
  shadowHeight,
  shadowOpacity,
  top,
  shadowColor = COLOR_KEYS.shadowButton,
}: Props) => (
  <Styled.UnderscoreButtonContainer
    width={width}
    height={height}
    borderRadius={borderRadius}
    shadowWidth={shadowWidth}
    shadowHeight={shadowHeight}
    shadowOpacity={shadowOpacity}
    top={top}
    shadowColor={shadowColor}
  />
);

export default UnderscoreButton;
