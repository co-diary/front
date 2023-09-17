import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../../assets/Logo-text.png';

const ThumbnailContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.5rem;
`;

function Thumbnail() {
  return <ThumbnailContainer src={LogoImage} alt='이미지가 없습니다.' />;
}

export default Thumbnail;
