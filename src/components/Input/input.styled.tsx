import styled, { css } from 'styled-components/native';
import { theme } from '../../theme';

type Props = {
  isFocused: boolean;
  isFilled: boolean;
};

export const StyledContainer = styled.View`
  width: 126px;
  height: 50px;
  margin-top: 40px;
  border-bottom-width: 1px;
  padding-right: 12px;
  padding-left: 1px;
  border-bottom-color: ${theme.colors.priceInputBorder};
  display: flex;
  flex-direction: row;
`;

const fieldInUse = css`
  transform: translateY(4px);
  font-size: 12px;
`;

const fieledNotUsed = css`
  transform: translateY(+25px);
  font-size: 18px;
`;

export const StyledPlaceholderLabel = styled.Text<Props>`
  position: absolute;
  left: 0;
  color: ${theme.colors.priceInputPlaceholedText};
  ${(props) => (props.isFocused || props.isFilled ? fieldInUse : fieledNotUsed)}
`;

export const StyledLabeledInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: ${theme.colors.priceInputText};
  padding: 0;
  margin-bottom: -20px;
`;

export const StyledRubleIcon = styled.View`
  position: absolute;
  bottom: 2px;
  right: 0;
`;
