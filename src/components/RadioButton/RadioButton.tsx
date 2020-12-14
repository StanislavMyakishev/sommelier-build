import React, { ReactNode, useState } from 'react';
import {
  RadioButtonContainer,
  RadioButtonText,
  RadioButtonViewFilled,
  RadioButtonViewUnfilled,
} from './RadioButton.styled';

export type RadioButtonProps = {
  checked?: boolean;
  children?: ReactNode;
};

export const RadioButton = ({
  checked = true,
  children = '',
}: RadioButtonProps) => {
  const [pressed, setPressed] = useState(checked);
  return (
    <RadioButtonContainer onPress={() => setPressed(!pressed)}>
      {pressed ? <RadioButtonViewFilled /> : <RadioButtonViewUnfilled />}
      <RadioButtonText>{children}</RadioButtonText>
    </RadioButtonContainer>
  );
};
