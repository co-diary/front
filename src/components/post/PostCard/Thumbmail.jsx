import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../../assets/Logo-text.png';

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.5rem;
`;

function Thumbmail() {
  return <Thumbnail src={LogoImage} alt='이미지가 없습니다.' />;
}

export default Thumbmail;
