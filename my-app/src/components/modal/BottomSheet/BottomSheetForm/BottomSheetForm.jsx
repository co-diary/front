import React from 'react';
import styled from 'styled-components';
import BottomSheetHeader from '../BottomSheetHeader';
import Theme from '../../../../styles/Theme';

const Container = styled.div`
  height: 83vh;
  border-top: 1px solid #bdbdbd;
`;

const Section = styled.div`
  height: 12rem;
`;

const Result = styled.div`
  background-color: tomato;
`;

const SectionBorder = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  border-bottom: 6px solid ${Theme.SECTION_BG};
`;

function BottomSheetForm() {
  return (
    <Container>
      <Section />
      <SectionBorder />
      <Result />
      <Section />
    </Container>
  );
}

export default BottomSheetForm;
