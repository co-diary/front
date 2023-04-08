import styled from 'styled-components';
// import Theme from '../../styles/Theme';

export const Container = styled.main`
  height: calc(100vh - 10.8rem);
  padding-top: calc(4.8rem + 2.6rem);
  padding-bottom: 2.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  height: fit-content;
`;
export const logo = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
`;
