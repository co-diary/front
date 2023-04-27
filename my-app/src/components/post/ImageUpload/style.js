import styled from 'styled-components';
import Theme from '../../../styles/Theme';
import IconAddPhoto from '../../../assets/Icon-AddPhoto.png';
import IconAddPhotoHover from '../../../assets/Icon-AddPhoto-hover.png';

const ImgLabelBtn = styled.label`
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

export default ImgLabelBtn;
