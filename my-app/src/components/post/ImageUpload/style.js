import styled, { keyframes, css } from 'styled-components';
import Theme from '../../../styles/Theme';
import IconPhotoX from '../../../assets/Icon-Photo-X.png';
import IconAddPhoto from '../../../assets/Icon-AddPhoto.png';
import IconAddPhotoHover from '../../../assets/Icon-AddPhoto-hover.png';

const Uploading = keyframes`
0% {
  background-position: -32px;
}
40%, 100% {
  background-position: 208px;
}
`;

export const ImageBox = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-direction: column;
  width: calc(100% - 5.6rem);
  margin-bottom: 2.2rem;
`;

export const ImgLabelBtn = styled.label`
  display: inline-block;
  width: 4.2rem;
  height: 3rem;
  position: relative;
  border: 1px solid ${Theme.BORDER};
  border-radius: 3rem;
  cursor: pointer;
  background-color: ${Theme.WHITE};

  &::before {
    content: '';
    background: url(${IconAddPhoto}) no-repeat;
    background-size: 2rem;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 2rem;
    height: 1.8rem;
  }

  &:hover::before {
    background: url(${IconAddPhotoHover}) no-repeat;
    background-size: 2rem;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

export const ImgPreviewBox = styled.section`
  margin-top: 0.8rem;
  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImgPreview = styled.ul`
  display: flex;
  justify-content: start;
  gap: 0.8rem;
  width: 40rem;
`;

export const ImgPreviewList = styled.li`
  width: 20rem;
  height: 14.4rem;
  position: relative;

  ${({ imgSize }) =>
    imgSize > 1 &&
    css`
      width: 12.6rem;
      height: 10rem;
    `};
`;

export const LoadingList = styled.li`
  width: 20rem;
  height: 14.4rem;
  position: relative;

  ${({ imgSize }) =>
    imgSize > 1 &&
    css`
      width: 12.6rem;
      height: 10rem;
    `};
`;

export const UploadingBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-image: linear-gradient(90deg, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-size: 12.6rem;
  animation: ${Uploading} 2s infinite ease-out;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

export const RemoveImgBtn = styled.button`
  &::after {
    content: '';
    position: absolute;
    background: url(${IconPhotoX}) no-repeat;
    background-size: 2rem;
    top: 0.6rem;
    right: 0.8rem;
    width: 2rem;
    height: 2rem;
  }
`;
