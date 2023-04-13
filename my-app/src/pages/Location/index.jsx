import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { collection, query, where, getDocs} from 'firebase/firestore';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { db } from '../../firebase';
import Header from '../../components/common/Header';
import NavBar from '../../components/common/NavBar';
import { authState } from '../../atom/authRecoil';

function Location() {
  
  const user = useRecoilValue(authState);
  const [userPost, setUserPost] = useState([]); 

  
  useEffect(() => {
    if(user) {
      getUserData();
    }  
  }, [user])

  const getUserData = async() => {
    const postArr = [];
    // q는 post 컬렉션 하위 문서에서 uid가 현재 로그인한 유저의 uid와 같은 거 찾는 쿼리
    const q = query(collection(db, 'post'), where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((value) => {
      postArr.push(value.data().address.latLng); 
    });
    setUserPost(postArr);
    

  }
  
  
  return (
    <>
    
      <Header title='지도' />
        <Map
          center={{ lat: '37.566535', lng: '126.9779692' }} // 서울시청을 중심좌표로 설정
          style={{ width: '100%', height: '100vh' }}
          level={1}
        >
          {userPost && userPost.map((marker, index) => (
            <MapMarker
            key={index}
              position={{
                lat: `${marker[0]}`,
                lng: `${marker[1]}`,
              }}
              draggable={true}
            />
          ))}
        </Map>

      <NavBar page='location' />
    </>
  );
}

export default Location;
