import styled from 'styled-components/native';
import {
  TypographyProps,
  StyledHeaderProps,
  StyledTextProps,
} from './typography.types';

const StyledTypography = styled.Text<TypographyProps>`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.black};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  text-decoration: ${({ crossedOut }) =>
    crossedOut ? 'line-through' : 'none'};
`;

export const StyledHeader = styled(StyledTypography)<StyledHeaderProps>`
  font-size: ${({ size, theme }) => theme.headerSizes[size]};
`;

export const StyledText = styled(StyledTypography)<StyledTextProps>`
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`;
