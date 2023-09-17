import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.main`
  padding: 4.8rem 0 6rem;
  height: calc(100vh - 4.8rem);
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.6rem 0;

  & + section {
    border-top: 1px solid ${Theme.SHADOW_BORDER};
    margin-left: -2rem;
    margin-right: -2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const DateInfo = styled.span`
  width: 8.4rem;
  text-align: center;
  padding: 0.4rem 0 0.4rem;
  font-size: 1.2rem;
  color: ${Theme.MAIN_GRAY};
  border: 1px solid ${Theme.PLACEHOLDER};
  border-radius: 3rem;
`;

export const MenuInfo = styled.strong`
  font-size: 2.4rem;
  line-height: 2.8rem;
  margin-top: 1.2rem;
`;

export const StarRatingContainer = styled.div`
  margin-top: 0.6rem;

  img {
    width: 2.4rem;
  }

  img + img {
    margin-left: 0.4rem;
  }
`;

export const PhotoCarousel = styled.div`
  width: 35rem;
  height: 22rem;
  border-radius: 1rem;
  margin-bottom: 2.6rem;
  overflow: hidden;

  img {
    width: 35rem;
    height: 22rem;
    border-radius: 1rem;
    object-fit: cover;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  max-width: 35rem;
`;

export const ListTitle = styled.strong`
  display: block;
  font-family: 'LINESeedKR-Bd';
  margin-bottom: 0.8rem;
`;

export const ListItem = styled.li`
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

export const DlContainer = styled.dl`
  div:nth-child(2) {
    dt {
      padding-right: 2rem;
    }
  }
`;

export const DlBox = styled.div`
  display: flex;

  & + div {
    padding-top: 1rem;
  }
`;

export const DlTitle = styled.dt`
  padding-right: 3.2rem;
`;

export const TagLink = styled.span`
  display: inline-block;
  padding: 0.6rem 1rem 0.4rem;
  border-radius: 3rem;
  color: ${Theme.WHITE};
  background-color: ${Theme.SUB_ORANGE};
  cursor: pointer;

  & + span {
    margin-left: 0.6rem;
    background-color: ${Theme.SUB_PINK};
  }
`;
