import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Theme from '../../styles/Theme';
import IconBack from '../../assets/Icon-Back.png';
import Button from '../../components/common/Button';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;

  align-items: center;
  height: 4.8rem;
  background-color: ${Theme.WHITE};
  padding: 0 2rem;
  z-index: 99;
  border-bottom: 1px solid ${Theme.BORDER};
  gap: 1rem;
`;

const SButton = styled.button`
  background-color: ${Theme.WHITE};
  width: 2.4rem;
  height: 2.4rem;
  img {
    width: 100%;
    height: 100%;
    margin-right: 0.6rem;
  }
`;

const SSearchForm = styled.form`
  display: flex;
  flex-basis: 100%;
`;

const SInput = styled.input`
  width: 100%;
  height: 3.2rem;
  padding: 1rem 0 1rem 1.4rem;
  border: 1px solid ${Theme.BORDER};
  border-radius: 3.2rem;
  margin-right: 0.6rem;

  &:focus {
    /* 임시로 설정 */
    border: 1px solid ${Theme.MAIN_FONT};
    outline: none;
  }
`;

function SearchHeader({
  isHome,
  title,
  rightIconOne,
  altOne,
  onClickOne,
  rightIconTwo,
  altTwo,
  onClickTwo,
}) {
  const navigate = useNavigate();
  const handlePageBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <SButton onClick={handlePageBack}>
        <img src={IconBack} alt='뒤로가기' />
      </SButton>
      <SSearchForm action=''>
        <SInput type='text' placeholder='검색어를 입력하세요.' />
        <Button size='sm' text='검색' />
      </SSearchForm>
    </Container>
  );
}

export default SearchHeader;
