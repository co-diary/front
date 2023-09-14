import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Image = styled.img`
  width: 7rem;
  height: 100%;
  object-fit: cover;
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  strong {
    font-family: LINESeedKR-Bd;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  p {
    margin: 0;
    font-size: 1.4rem;
    line-height: 1.5;
  }
`;
