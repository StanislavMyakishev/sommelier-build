import styled from 'styled-components/native';

export const CheckboxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CheckboxText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  align-self: auto;
  font-size: 20px;
  font-weight: 500;
  margin-left: 40px;
`;

export const UncheckedCB = styled.TouchableOpacity`
  height: 18
  width: 18
  borderRadius: 2
  borderWidth: 1
  borderColor: #757575
  alignItems: center
  justifyContent: center
`;

export const CheckedCB = styled.TouchableOpacity`
  height: 18
  width: 18
  alignItems: center
  justifyContent: center
`;
