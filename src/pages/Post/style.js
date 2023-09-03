import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Container = styled.main`
  padding-top: 4.8rem;
  height: calc(100vh - 4.8rem);
`;

export const CategoryContainer = styled.ul`
  display: flex;
  gap: 1.6rem;
  padding: 2.6rem 0 2rem;
  border-bottom: 1px solid ${Theme.BORDER};
`;

export const CategoryBtn = styled.button`
  color: ${({ isActive }) => (isActive ? `${Theme.MAIN_FONT}` : `${Theme.MAIN_GRAY}`)};

  font-family: 'LINESeedKR-Bd';
  font-size: 1.4rem;
`;

export const HeaderBtn = styled.button`
  background-color: ${Theme.WHITE};
  img {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
  }
`;
