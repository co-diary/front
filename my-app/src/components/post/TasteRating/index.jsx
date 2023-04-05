import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Star } from '../../../assets/svg/Icon-star.svg';

const SRatingBox = styled.div`
  width: calc(100% - 5.6rem);
`;

const createArray = (length) => [...Array(length)];

function TasteRating({ totalStars = 5, ratingClicked, setRatingClicked }) {
  return (
    <SRatingBox>
      {createArray(totalStars).map((rating, i) => (
        <Star
          key={i}
          fill={ratingClicked > i ? '#F7DA76' : '#BDBDBD'}
          width='2rem'
          height='2rem'
          cursor='pointer'
          onClick={() => setRatingClicked(i + 1)}
        />
      ))}
    </SRatingBox>
  );
}

export default TasteRating;
