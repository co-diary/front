import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Star } from '../../../assets/svg/Icon-star.svg';

const SRatingBox = styled.div`
  width: calc(100% - 5.6rem);
`;

function TasteRating({ fill }) {
  return (
    <SRatingBox>
      <Star fill={fill ? '#F7DA76' : '#BDBDBD'} width='2rem' height='2rem' cursor='pointer' />
      <Star fill={fill ? '#F7DA76' : '#BDBDBD'} width='2rem' height='2rem' cursor='pointer' />
      <Star fill={fill ? '#F7DA76' : '#BDBDBD'} width='2rem' height='2rem' cursor='pointer' />
      <Star fill={fill ? '#F7DA76' : '#BDBDBD'} width='2rem' height='2rem' cursor='pointer' />
      <Star fill={fill ? '#F7DA76' : '#BDBDBD'} width='2rem' height='2rem' cursor='pointer' />
    </SRatingBox>
  );
}

export default TasteRating;
