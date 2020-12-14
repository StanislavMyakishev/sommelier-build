import styled from 'styled-components/native';
import { theme } from '../../theme';

type ButtonProps = {
  width?: number;
  borderRadius?: number;
  height?: number;
};

type UnderscoreButtonProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  shadowWidth?: number;
  shadowHeight?: number;
  shadowOpacity?: number;
  top?: number;
  shadowColor?: keyof typeof theme.colors;
};

type IconProps = {
  width?: number;
  height?: number;
  margin?: number;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primaryRed};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  width: ${({ width }) => width || 0};
  height: ${({ height }) => height || 0};
  z-index: 2;
  margin: auto;
`;

export const UnderscoreButtonContainer = styled.View<UnderscoreButtonProps>`
  position: absolute;
  margin-left: 30px;
  top: ${({ top }) => top || 0};
  background-color: ${({ theme }) => theme.colors.primaryDarkRed};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  width: ${({ width }) => width || 0};
  height: ${({ height }) => height || 0};
  shadow-offset: {
    width: ${({ shadowWidth }) => shadowWidth || 0};
    height: ${({ shadowHeight }) => shadowHeight || 0};
  }
  shadow-opacity: ${({ shadowOpacity }) => shadowOpacity || 0};
  shadow-color: ${({ theme }) => theme.colors.shadowButton};
  z-index: 1;
`;

export const ButtonTextContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  position: relative;
`;

export const IconContainer = styled.View<IconProps>`
  width: ${({ width }) => width || 0};
  height: ${({ height }) => height || 0};

  margin-right: 9px;
`;
