import React from 'react';
import * as Styled from './starsRating.styled';
import FilledStar from '../../images/FilledStar.svg';
import UnfilledStar from '../../images/UnfilledStar.svg';

export type StarsRatingProps = {
  rating: number;
  score?: number;
};

const preparedStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    if (i > rating) {
      stars.push(<UnfilledStar width="25" height="25" key={i} />);
    } else {
      stars.push(<FilledStar width="25" height="25" key={i} />);
    }
  }
  return stars;
};

export const StarsRating = ({ score, rating }: StarsRatingProps) => (
  <Styled.Container>
    <Styled.RatingContainer>
      <Styled.ImageContainer>{preparedStars(rating)}</Styled.ImageContainer>
      {!!score && <Styled.RatingText>{score}</Styled.RatingText>}
    </Styled.RatingContainer>
  </Styled.Container>
);
