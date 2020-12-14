import React, { ReactNode, useState } from 'react';
import Checked from '../../images/checked.svg';
import {
  CheckboxContainer,
  CheckboxText,
  UncheckedCB,
  CheckedCB,
} from './checkbox.styled';

export type CheckboxProps = {
  checked: boolean;
  children: ReactNode;
};

export const Checkbox = ({ checked, children }: CheckboxProps) => {
  const [pressed, setPressed] = useState(checked);
  return (
    <CheckboxContainer>
      {pressed ? (
        <CheckedCB onPress={() => setPressed(!pressed)}>
          <Checked />
        </CheckedCB>
      ) : (
        <UncheckedCB onPress={() => setPressed(!pressed)} />
      )}
      <CheckboxText>{children}</CheckboxText>
    </CheckboxContainer>
  );
};
