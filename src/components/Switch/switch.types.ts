import { ReactNode } from 'react';
import { theme } from '../../theme';

export type SwitchProps = {
  switchType?: keyof typeof theme.switchTypes;
  value?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
};

export type ToggleProps = {
  children?: ReactNode;
  value: boolean;
};

export type NotchProps = {
  children?: ReactNode;
  value: boolean;
};
