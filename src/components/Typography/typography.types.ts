import { ReactNode } from 'react';
import { COLOR_KEYS } from '../../theme/colors';
import { HEADER_SIZES_KEYS } from '../../theme/headerSizes';
import { FONT_SIZE_KEYS } from '../../theme/fontSizes';

export type TypographyProps = {
  bold?: boolean;
  italic?: boolean;
  crossedOut?: boolean;
  color?: keyof typeof COLOR_KEYS;
};

export type StyledHeaderProps = TypographyProps & {
  size: keyof typeof HEADER_SIZES_KEYS;
};

export type HeaderProps = TypographyProps & {
  children: ReactNode;
  size: keyof typeof HEADER_SIZES_KEYS;
};

export type StyledTextProps = TypographyProps & {
  size: keyof typeof FONT_SIZE_KEYS;
};

export type TextProps = TypographyProps & {
  children: ReactNode;
  size?: keyof typeof FONT_SIZE_KEYS;
};
