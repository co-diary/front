import React from 'react';
import styled, { css } from 'styled-components';
import Theme from '../../../../styles/Theme';

function CancelBtnSlide({ handleCancelBtn, focus }) {
  return (
    <>
      {focus && (
        <CancelBtn focus={focus} onMouseDown={() => handleCancelBtn()}>
          취소
        </CancelBtn>
      )}
    </>
  );
}

const CancelBtn = styled.button`
  position: absolute;
  right: 1rem;
  width: 5rem;
  color: #3d3d3d;
  padding: 1.3rem 0 1.3rem 0;
  font-size: 1.4rem;
  font-family: 'LINESeedKR-Bd';
  margin-left: 0.6rem;

  ${({ focus }) =>
    focus
      ? css`
          animation: buttonIn 0.25s ease-out;
        `
      : css`
          animation: buttonOut 0.25s ease-out;
        `}

  @keyframes buttonIn {
    from {
      right: -3rem;
      opacity: 0;
    }
    to {
      right: 1rem;
      opacity: 1;
    }
  }
  @keyframes buttonOut {
    from {
      right: 1rem;
      opacity: 1;
    }
    to {
      right: -3rem;
      opacity: 0;
    }
  }
`;

export default CancelBtnSlide;
