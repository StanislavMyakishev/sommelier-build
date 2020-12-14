import styled from 'styled-components/native';

export const NavbarContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 55.47px;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
`;

export const ItemsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ItemContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const NavItemStyle = styled.View`
  margin-bottom: 6px;
  width: 20px;
  height: 20px;
`;
