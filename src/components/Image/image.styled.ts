import styled from 'styled-components/native';

type ImageContainerProps = {
  width?: number;
  height?: number;
};

export const ImageContainer = styled.Image<ImageContainerProps>`
  width: ${({ width }) => width || 0}px;
  height: ${({ height }) => height || 0}px;
`;
