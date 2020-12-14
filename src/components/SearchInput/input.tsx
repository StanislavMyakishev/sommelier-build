import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../../theme';
import * as Styled from './input.styled';
import Search from '../../images/search.svg';
import Close from '../../images/close.svg';
import { INPUT_SIZE_KEYS } from '../../theme/inputSearchSizes';

export type SearchInputProps = {
  defaultValue?: string;
  placeholder?: string;
  editable?: boolean;
  size?: keyof typeof theme.inputSearchSizes;
  maxLength?: number;
  value?: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  clearButtonMode?: boolean;
};

export const SearchInput = ({
  value,
  onChange,
  maxLength,
  placeholder,
  defaultValue,
  clearButtonMode,
  editable = true,
  size = INPUT_SIZE_KEYS.md,
}: SearchInputProps) => {
  const [text, setText] = useState(value);
  return (
    <Styled.StyledView editable={editable}>
      <Search
        width={theme.searchSizes[size]}
        height={theme.searchSizes[size]}
        testID="sommelier-search-input-search-svg"
      />
      <Styled.StyledInput
        defaultValue={defaultValue}
        placeholder={placeholder}
        editable={editable}
        size={size}
        value={text}
        onChange={onChange}
        onChangeText={(text) => setText(text)}
        maxLength={maxLength}
        testID="sommelier-search-input"
      />
      {clearButtonMode && (
        <Styled.ViewClose>
          <TouchableOpacity
            onPress={() => setText('')}
            testID="sommelier-search-input-clear-button"
          >
            <Close
              width={theme.inputSearchFontSizes[size]}
              height={theme.inputSearchFontSizes[size]}
              testID="sommelier-search-input-close-svg"
            />
          </TouchableOpacity>
        </Styled.ViewClose>
      )}
    </Styled.StyledView>
  );
};
