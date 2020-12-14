import styled from 'styled-components/native';
import { SwitchProps, ToggleProps, NotchProps } from './switch.types';

export const SwitchContainer = styled.TouchableWithoutFeedback<SwitchProps>`
  ${({ disabled }) => disabled && `opacity: 0.5;`}
`;

export const Toggle = styled.View<ToggleProps>`
  height: 16px;
  width: 34px;
  border-radius: 50px;
  background-color: ${({ value, theme }) =>
    value ? theme.colors.switchToggleOn : theme.colors.switchToggleOff};
`;

export const Notch = styled.View<NotchProps>`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: ${({ value, theme }) =>
    value ? theme.colors.switchNotchOn : theme.colors.switchNotchOff};
  ${({ value }) => (value ? 'right: -3px;' : 'left: -3px;')};
  top: -2px;
  position: absolute;
  z-index: 1;
`;

export const Mark = styled.View`
  position: absolute;
  left: 6px;
  top: 6px;
`;
