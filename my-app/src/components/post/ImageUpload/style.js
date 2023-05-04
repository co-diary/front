import styled, { css } from 'styled-components';
import Theme from '../../../styles/Theme';
import IconAddPhoto from '../../../assets/Icon-AddPhoto.png';
import IconAddPhotoHover from '../../../assets/Icon-AddPhoto-hover.png';

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

  ${({ imgSize }) =>
    imgSize > 1 &&
    css`
      width: 12.6rem;
      height: 10rem;
    `};

  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;
