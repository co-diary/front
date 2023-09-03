import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Profile = styled.section`
  height: 9rem;
  border-bottom: 6px solid ${Theme.SECTION_BG};
  display: flex;
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

export const Menu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
