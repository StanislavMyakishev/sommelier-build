import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RatingText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  align-self: center;
  font-size: 20px;
  font-weight: 500;
`;
