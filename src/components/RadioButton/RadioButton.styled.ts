import styled from 'styled-components/native';

export const RadioButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const RadioButtonText = styled.Text`
  color: black;
`;

export const RadioButtonViewUnfilled = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.fillGray};
  align-items: center;
  justify-content: center;
  margin-right: 40px;
`;

export const RadioButtonViewFilled = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.fillRed};
  background-color: ${({ theme }) => theme.colors.fillRed};
  align-items: center;
  justify-content: center;
  margin-right: 40px;
`;
