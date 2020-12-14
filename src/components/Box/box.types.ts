import { ReactNode } from 'react';
import { theme } from '../../theme';

export const SIZE = {
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl',
} as const;

export type BoxProps = {
  pX?: keyof typeof SIZE;
  pY?: keyof typeof SIZE;
  mX?: keyof typeof SIZE;
  mY?: keyof typeof SIZE;
  borderRadius?: number;
  borderColor?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
};

export type Props = BoxProps & { children: ReactNode };
