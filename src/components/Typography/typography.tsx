import React, { ReactElement } from 'react';
import { StyledHeader, StyledText } from './typography.styled';
import { HeaderProps, TextProps } from './typography.types';
import { COLOR_KEYS } from '../../theme/colors';
import { HEADER_SIZES_KEYS } from '../../theme/headerSizes';
import { FONT_SIZE_KEYS } from '../../theme/fontSizes';

export const Header = ({
  children,
  bold,
  color,
  crossedOut,
  italic,
  size,
}: HeaderProps) => (
  <StyledHeader
    bold={bold}
    color={color}
    crossedOut={crossedOut}
    italic={italic}
    size={size}
  >
    {children}
  </StyledHeader>
);

export const H1 = (props: Omit<HeaderProps, 'size'>) => (
  <Header {...props} size={HEADER_SIZES_KEYS.h1} />
);
export const H2 = (props: Omit<HeaderProps, 'size'>) => (
  <Header {...props} size={HEADER_SIZES_KEYS.h2} />
);
export const H3 = (props: Omit<HeaderProps, 'size'>) => (
  <Header {...props} size={HEADER_SIZES_KEYS.h3} />
);
export const H4 = (props: Omit<HeaderProps, 'size'>) => (
  <Header {...props} size={HEADER_SIZES_KEYS.h4} />
);
export const H5 = (props: Omit<HeaderProps, 'size'>) => (
  <Header {...props} size={HEADER_SIZES_KEYS.h5} />
);
export const H6 = (props: Omit<HeaderProps, 'size'>) => (
  <Header {...props} size={HEADER_SIZES_KEYS.h6} />
);

export const Text = ({
  children,
  color = COLOR_KEYS.black,
  bold,
  italic,
  size = FONT_SIZE_KEYS.md,
  crossedOut,
}: TextProps): ReactElement => (
  <StyledText
    color={color}
    bold={bold}
    italic={italic}
    size={size}
    crossedOut={crossedOut}
    testID="sommelier-typography"
  >
    {children}
  </StyledText>
);
