import React from 'react';
import styled from 'styled-components';
import Theme from '../../../styles/Theme';

function BottomSheetHeader() {
  const CloseHandler = styled.button`
    width: 5rem;
    height: 0.4rem;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.5rem;
    background-color: ${Theme.SHADOW_BORDER};

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2.5rem;
      margin-top: -1rem;
    }
  `;

  return <CloseHandler></CloseHandler>;
}

export default BottomSheetHeader;
