import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 6px));

  img {
    width: 8rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.8rem;
  }
`;

export default Container;
