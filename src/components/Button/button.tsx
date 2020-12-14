import React, { ReactNode } from 'react';
import * as Styled from './button.styled';
import * as Typography from '../Typography';
import { theme } from '../../theme';
import { COLOR_KEYS } from '../../theme/colors';

export type ButtonProps = {
  onPress?: () => void;
  width?: number;
  borderRadius?: number;
  height?: number;
  fontSize?: keyof typeof theme.fontSizes;
  color?: keyof typeof theme.colors;
  icon?: ReactNode;
  iconHeight?: number;
  iconWidth?: number;
  children: ReactNode;
};

export const Button = ({
  children,
  width,
  borderRadius,
  height,
  iconHeight,
  iconWidth,
  onPress = () => {},
  fontSize = 'hg',
  color = COLOR_KEYS.white,
  icon,
}: ButtonProps) => (
  <Styled.ButtonContainer
    onPress={onPress}
    width={width}
    borderRadius={borderRadius}
    height={height}
    testID="sommelier-button"
  >
    <Styled.ButtonTextContainer testID="sommelier-button-textContainer">
      <Typography.Text color={color} size={fontSize}>
        {icon && (
          <Styled.IconContainer height={iconHeight} width={iconWidth}>
            {icon}
          </Styled.IconContainer>
        )}
        {children}
      </Typography.Text>
    </Styled.ButtonTextContainer>
  </Styled.ButtonContainer>
);
