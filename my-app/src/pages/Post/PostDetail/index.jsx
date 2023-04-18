import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { updateDoc, doc, deleteField, onSnapshot, deleteDoc } from 'firebase/firestore';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { db } from '../../../firebase';
import Header from '../../../components/common/Header';
import * as S from './style';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconStarOff from '../../../assets/Icon-star-off.png';
import IconPrev from '../../../assets/Icon-detail-prev.png';
import IconPrevDisabled from '../../../assets/Icon-detail-prev-hover.png';
import IconNext from '../../../assets/Icon-detail-next.png';
import IconNextDisabled from '../../../assets/Icon-detail-next-hover.png';
import IconHeartOff from '../../../assets/Icon-Heart-off.png';
import IconHeartOn from '../../../assets/Icon-Heart-on.png';
import IconMore from '../../../assets/Icon-More.png';
import currentPost from '../../../atom/currentPostRecoil';
import { authState } from '../../../atom/authRecoil';
import SimpleSlider from '../../../components/post/SimpleSlider';
import modalState from '../../../atom/modalRecoil';
import Portal from '../../../components/modal/Portal';
import BottomSheet from '../../../components/modal/BottomSheet';
import BottomSheetDefault from '../../../components/modal/BottomSheet/BottomSheetStyle/BottomSheetDefault';
import ConfirmModal from '../../../components/modal/ConfirmModal';
import useToggle from '../../../hooks/useToggle';

function PostDetail() {
  const user = useRecoilValue(authState);
  const { id } = useParams();
  const postRef = doc(db, 'post', id);
  const [post, setPost] = useRecoilState(currentPost);
  const [isLiked, setIsLiked] = useState(post?.like);
  const [modal, setModal] = useRecoilState(modalState);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useToggle();
  const scoreIndexs = [0, 1, 2, 3, 4];
  const menuPrice = post?.price;
  const priceComma = menuPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const hashtag = post?.tag;
  const images = post?.photo;
  const date = post?.date;
  const slicedDate = date?.toDate().toISOString().slice(2, 10).replaceAll('-', '.');
  const navigate = useNavigate();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nexBtnDisabled, setNextBtnDisabled] = useState(false);
  // 이전/다음 게시글
  const [userPostList, setUserPostList] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState();
  const location = useLocation();
  const categoryPostArr = location.state;

  console.log('post', post);

  useEffect(() => {
    addLikedListener();
    getUserPost();
  }, [id]);

  const getUserPost = async () => {
    if (categoryPostArr) {
      const postArr = [];

      categoryPostArr.forEach((v) => postArr.push(v.key));
      setUserPostList(postArr);
      findIndex(postArr);
    } else {
      findIndex(userPostList);
    }
  };

  const findIndex = (postArr) => {
    const postIndex = postArr.indexOf(`${id}`);

    if (postIndex === 0) {
      setPrevBtnDisabled(true);
    } else if (postIndex === postArr.length - 1) {
      setNextBtnDisabled(true);
    } else {
      setPrevBtnDisabled(false);
      setNextBtnDisabled(false);
    }

    setCurrentPostIndex(postIndex);
  };

  const addLikedListener = () => {
    onSnapshot(postRef, (state) => {
      const postData = state.data();

      setPost(postData);
      setIsLiked(postData.like);
    });
  };

  const handleLikedBtn = async () => {
    setIsLiked((prev) => !prev);
    if (isLiked) {
      await updateDoc(postRef, {
        like: false,
      });
      await updateDoc(doc(db, 'liked', user.uid), {
        [id]: deleteField(),
      });
    } else {
      await updateDoc(postRef, {
        like: true,
      });
      await updateDoc(doc(db, 'liked', user.uid), {
        [id]: { ...post, like: true },
      });
    }
  };

  const handleOpenModal = () => {
    setModal({ ...modal, visible: true });
  };

  const onClickIcon = () => {
    setModal({ ...modal, visible: false });
  };

  const onClickEdit = () => {
    navigate(`/post/${id}/edit`);
  };

  const onClickDelete = () => {
    setIsConfirmModalOpen();
  };

  const confirmModalClose = () => {
    setIsConfirmModalOpen();
  };

  const rightOnclick = async () => {
    await deleteDoc(doc(db, 'post', id));
    setIsConfirmModalOpen();
    navigate(-1);
  };

  const handleLocationMap = () => {
    navigate('/location', {
      state: post?.address.latLng,
    });
  };

  const handlePrevBtn = () => {
    navigate(`/post/${userPostList[currentPostIndex - 1]}`);
  };

  const handleNextBtn = () => {
    navigate(`/post/${userPostList[currentPostIndex + 1]}`);
  };

  return (
    <>
      {post && (
        <>
          <Header
            title={post.category}
            rightChild={
              <>
                <S.HeaderBtn onClick={handleLikedBtn}>
                  {isLiked ? (
                    <img src={IconHeartOn} alt='좋아요 활성화' />
                  ) : (
                    <img src={IconHeartOff} alt='좋아요 비활성화' />
                  )}
                </S.HeaderBtn>
                <S.HeaderBtn onClick={handleOpenModal}>
                  <img src={IconMore} alt='더보기 버튼' />
                </S.HeaderBtn>
              </>
            }
          />
          <S.Container>
            <header>
              <h1 className='ir'>게시글 상세 페이지</h1>
            </header>
            <S.Section>
              <h2 className='ir'>게시글 날짜, 메뉴명과 별점</h2>
              <S.DateInfo>{slicedDate}</S.DateInfo>
              <S.MenuInfo>{post.menu}</S.MenuInfo>
              <S.StarRatingContainer>
                {scoreIndexs.map((index) =>
                  post.score > index ? (
                    <img src={IconStarOn} alt='별점' key={index} />
                  ) : (
                    <img
                      src={IconStarOff}
                      alt='체크되지 않은 별점'
                      aria-hidden='true'
                      key={index}
                    />
                  ),
                )}
              </S.StarRatingContainer>
            </S.Section>
            <S.Section>
              <h2 className='ir'>메뉴 후기와 매장 정보</h2>
              {/* 파이어베이스 photo 필드 저장 형태에 따라 코드 수정 예정 */}
              {typeof images === 'string' && (
                <S.PhotoCarousel>
                  <img src={images} alt='' />
                </S.PhotoCarousel>
              )}
              {typeof images === 'object' && (
                <S.PhotoCarousel>
                  <SimpleSlider images={images} />
                </S.PhotoCarousel>
              )}
              <S.ListContainer>
                <S.ListItem>
                  <S.ListTitle>후기</S.ListTitle>
                  <p>{post.review}</p>
                </S.ListItem>
                <S.ListItem>
                  <S.ListTitle>매장 정보</S.ListTitle>
                  <S.DlContainer>
                    <S.DlBox>
                      <S.DlTitle>가격</S.DlTitle>
                      <dd>{priceComma}원</dd>
                    </S.DlBox>
                    <S.DlBox>
                      <S.DlTitle>상호명</S.DlTitle>
                      <dd>{post.shop}</dd>
                    </S.DlBox>
                    <S.DlBox>
                      <S.DlTitle>위치</S.DlTitle>
                      <dd>{post.address.location}</dd>
                    </S.DlBox>
                    <Map
                      center={{
                        lat: `${post?.address.latLng[0]}`,
                        lng: `${post?.address.latLng[1]}`,
                      }}
                      style={{
                        width: '296px',
                        height: '66px',
                        borderRadius: '10px',
                        marginTop: '10px',
                        marginLeft: 'auto',
                      }}
                      level={3}
                      onClick={handleLocationMap}
                    >
                      <MapMarker
                        position={{
                          lat: `${post?.address.latLng[0]}`,
                          lng: `${post?.address.latLng[1]}`,
                        }}
                      />
                    </Map>
                  </S.DlContainer>
                </S.ListItem>
                <S.ListItem>
                  <S.ListTitle>태그</S.ListTitle>
                  {hashtag &&
                    hashtag.map((tag, index) => (
                      <S.TagLink key={index} to={`/hashtag/${tag}`}>
                        #{tag}
                      </S.TagLink>
                    ))}
                </S.ListItem>
              </S.ListContainer>
              <S.BtnContainer>
                <S.Btn
                  onClick={handlePrevBtn}
                  disabled={prevBtnDisabled}
                  style={{ cursor: prevBtnDisabled ? 'auto' : 'pointer' }}
                >
                  {' '}
                  {prevBtnDisabled ? (
                    <img src={IconPrevDisabled} alt='이전 게시글 없음' />
                  ) : (
                    <img src={IconPrev} alt='이전 게시글 보기' />
                  )}
                </S.Btn>
                <S.Btn
                  onClick={handleNextBtn}
                  disabled={nexBtnDisabled}
                  style={{ cursor: nexBtnDisabled ? 'auto' : 'pointer' }}
                >
                  {nexBtnDisabled ? (
                    <img src={IconNextDisabled} alt='다음 게시글 없음' />
                  ) : (
                    <img src={IconNext} alt='다음 게시글 보기' />
                  )}
                </S.Btn>
              </S.BtnContainer>
            </S.Section>
          </S.Container>
          <Portal>
            <BottomSheet visible={modal} onClickClose={onClickIcon}>
              <BottomSheetDefault onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
            </BottomSheet>
            <ConfirmModal
              visible={isConfirmModalOpen}
              msg='기록을 삭제할까요?'
              leftBtnMsg='취소'
              rightBtnMsg='삭제'
              onClickClose={confirmModalClose}
              rightOnclick={rightOnclick}
              leftOnclick={confirmModalClose}
            />
          </Portal>
        </>
      )}
    </>
  );
}

export default PostDetail;
