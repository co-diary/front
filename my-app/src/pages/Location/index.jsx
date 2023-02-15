import React from 'react';

import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import * as S from './style'


function Location() {
  
  


  return (
  <>
    <Header title="지도" />
    <S.Container 
      id="UserMap" 
      
      />
    <NavBar page="location"  />
  </>
);
};

export default Location;
