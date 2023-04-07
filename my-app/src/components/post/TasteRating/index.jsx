import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Star } from '../../../assets/svg/Icon-star.svg';

const SRatingBox = styled.div`
  width: calc(100% - 5.6rem);
`;

function TasteRating({ ratingClicked, setRatingClicked }) {
  const ratingIndex = [0, 1, 2, 3, 4];

  return (
    <SRatingBox>
      {ratingIndex.map((rating, i) => (
        <Star
          key={i}
          fill={ratingClicked > rating ? '#F7DA76' : '#BDBDBD'}
          width='2rem'
          height='2rem'
          cursor='pointer'
          onClick={() => setRatingClicked(rating + 1)}
        />
      ))}
    </SRatingBox>
  );
}

export default TasteRating;
