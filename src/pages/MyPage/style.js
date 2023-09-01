import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;

export const BoxOne = styled.div`
  height: 9rem;
  border-bottom: 6px solid ${Theme.SECTION_BG};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;
  margin-left: -2rem;
  margin-right: -2rem;
`;

export const ButtonContainer = styled.div`
  padding-top: 0.2rem;
`;

export const UserName = styled.strong`
  font-family: 'LINESeedKR-Bd';
  font-size: 1.4rem;
  line-height: 1.9rem;
`;

export const UserEmail = styled.p`
  color: #646464;
  font-size: 1.2rem;
`;

export const BoxTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NoticeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${Theme.SHADOW_BORDER};
  height: 6rem;
  font-size: 1.4rem;
  font-family: 'LINESeedKR-Bd';
  padding-top: 2rem;
`;

export const MyPageLists = styled.div`
  border-bottom: 1px solid ${Theme.SHADOW_BORDER};
  width: 100%;
  height: 6rem;
  font-size: 1.4rem;
  font-family: 'LINESeedKR-Bd';
  padding-top: 2rem;
  padding-bottom: 2.2rem;
`;

export const WebVersionContainer = styled.div`
  position: relative;
  display: flex;
`;

export const WebVersion = styled.p`
  font-family: 'LINESeedKR-Bd';
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${Theme.BORDER};
`;

export const Deactivate = styled.li`
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-decoration-line: underline;
  padding-top: 1.2rem;
`;
