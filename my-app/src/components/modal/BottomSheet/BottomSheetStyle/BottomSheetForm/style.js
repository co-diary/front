import styled from 'styled-components';
import Theme from '../../../../../styles/Theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.6rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${Theme.WHITE};
  padding: 1.2rem 2rem;
`;

export const BottomSheetTitle = styled.h2`
  font-size: 1.8rem;
  padding-top: 0.4rem;
`;

export const Button = styled.button`
  background-color: ${Theme.WHITE};
  width: 2.4rem;
  height: 2.4rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const MainContainer = styled.div`
  height: 83vh;
  border-top: 1px solid #bdbdbd;
`;

export const Section = styled.div`
  height: 12rem;
`;

export const Result = styled.div`
  background-color: tomato;
`;

export const SectionBorder = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  border-bottom: 6px solid ${Theme.SECTION_BG};
`;
