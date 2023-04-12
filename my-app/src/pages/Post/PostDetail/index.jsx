import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { updateDoc, doc, deleteField, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';
import Header from '../../../components/common/Header';
import * as S from './style';
import IconStarOn from '../../../assets/Icon-star-on.png';
import IconStarOff from '../../../assets/Icon-star-off.png';
import IconPrev from '../../../assets/Icon-detail-prev.png';
import IconNext from '../../../assets/Icon-detail-next.png';
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
import PostMap from './PostMap';

function PostDetail() {
  const user = useRecoilValue(authState);
  const [post, setPost] = useRecoilState(currentPost);
  const { id } = useParams();
  const postRef = doc(db, 'post', id);
  const [isLiked, setIsLiked] = useState(post?.like);
  const scoreIndexs = [0, 1, 2, 3, 4];
  const menuPrice = post?.price;
  const priceComma = menuPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const hashtag = post?.tag;
  const images = post?.photo;
  const date = post?.date;
  const slicedDate = date?.toDate().toISOString().slice(2, 10).replaceAll('-', '.');
  const [modal, setModal] = useRecoilState(modalState);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useToggle();
  const navigate = useNavigate();

  useEffect(() => {
    addLikedListener();
  }, []);

  const addLikedListener = () => {
    onSnapshot(postRef, (state) => {
      const postData = state.data();

      setPost(postData);
      setIsLiked(postData.like);
    });
  };

  console.log('post', post);

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
    // 각 게시글의 수정페이지로 이동되도록 추후 수정해야 함
    console.log('게시글 수정 클릭하면 해당 게시글 수정 페이지로 이동');
    navigate('/post/edit');
  };

  const onClickDelete = () => {
    console.log('게시글 삭제 클릭하면 컨펌 모달 뜸');
    setIsConfirmModalOpen();
  };

  const confirmModalClose = () => {
    setIsConfirmModalOpen();
  };

  const rightOnclick = () => {
    console.log('해당 게시글 삭제 기능 구현 후 컴펌 창 사라지고 이전 페이지로 이동');
    setIsConfirmModalOpen();
    navigate(-1);
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
              {/* 사진 업로드 없이 게시글 등록할 경우 db에 photo key/value는 저장되지 않는다고 가정 */}
              {images && (
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
                      <dd>{post.address.name}</dd>
                    </S.DlBox>
                    <S.MapContainer id='map' >
                      <PostMap />
                    </S.MapContainer>
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
                <S.Btn>
                  <img src={IconPrev} alt='이전 게시글 보기' />
                </S.Btn>
                <S.Btn>
                  <img src={IconNext} alt='다음 게시글 보기' />
                </S.Btn>
              </S.BtnContainer>
            </S.Section>
          </S.Container>
          <Portal>
            <BottomSheet visible={modal.visible} onClickClose={onClickIcon}>
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
