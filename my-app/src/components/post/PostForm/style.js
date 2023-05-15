import styled from 'styled-components';
import Theme from '../../../styles/Theme';
import IconLocationOff from '../../../assets/Icon-Nav-Map-off.png';
import IconLocationHover from '../../../assets/Icon-Map-hover.png';
import IconAddInput from '../../../assets/Icon-AddInput.png';

export const Container = styled.div`
  padding: 4.8rem 0 6rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  & input[type='file'] {
    display: none;
  }
`;

export const SelectBoxWrapper = styled.article`
  display: flex;
  gap: 1.2rem;
  margin: 2.6rem 0 2.4rem;
`;

export const SectionBorder = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-bottom: 2.8rem;
  border-bottom: 6px solid ${Theme.SECTION_BG};
`;

export const InputBox = styled.div`
  display: flex;
  position: relative;
  align-items: ${(props) => props.align || 'center'};
  margin-bottom: ${(props) => props.length};
`;

export const Label = styled.label`
  display: inline-block;
  width: 5.6rem;
  margin-right: 1.2rem;
  padding: ${(props) => props.padding || '0.4rem 0'};
  font-family: 'LINESeedKR-Bd';
  font-size: 1.4rem;
  color: ${Theme.MAIN_FONT};
`;

export const Input = styled.input`
  width: calc(100% - 5.6rem);
  padding: 0.4rem 0;
  font-family: 'LINESeedKR-Rg';
  font-size: 1.4rem;
  line-height: 1.8rem;
  border: none;
  border-bottom: 1px solid ${Theme.BORDER};
  outline: none;

  &::placeholder {
    font-family: 'LINESeedKR-Rg';
    color: ${Theme.PLACEHOLDER};
  }

  &:focus {
    border-bottom: 1px solid ${Theme.MAIN};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
  }
`;

export const ReviewInput = styled.textarea`
  display: block;
  width: calc(100% - 5.6rem);
  font-family: 'LINESeedKR-Rg';
  border: none;
  word-break: break-all;
  white-space: pre-wrap;
  resize: none;
  padding: 0.6rem 0;
  overflow-y: scroll;
  outline: none;
  max-height: 6rem;
  border-bottom: 1px solid ${Theme.BORDER};

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    border-bottom: 1px solid ${Theme.MAIN};
  }

  &::placeholder {
    font-family: 'LINESeedKR-Rg';
    font-size: 1.4rem;
    color: ${Theme.PLACEHOLDER};
  }
`;

export const CalendarBtn = styled.img`
  position: absolute;
  top: 0.2rem;
  left: 14.6rem;
  width: 2rem;
`;

export const LocationBtn = styled.button`
  background: url(${IconLocationOff}) no-repeat;
  background-size: 2.2rem;
  position: absolute;
  top: 0rem;
  right: 0;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;

  &:hover {
    background: url(${IconLocationHover}) no-repeat;
    background-size: 2.2rem;
  }
`;

export const SubTitleBox = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  span {
    font-family: 'LINESeedKR-Bd';
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  span::before {
    content: '';
    display: inline-block;
    background-image: url(${IconAddInput});
    background-size: 2rem;
    width: 2rem;
    height: 2rem;
    vertical-align: bottom;
    margin-right: 0.2rem;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.length};
`;

export const TagImgBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 5.6rem);
  margin-bottom: ${(props) => props.length};
`;

export const TagInput = styled.input`
  padding: 0.4rem 0;
  font-family: 'LINESeedKR-Rg';
  font-size: 1.4rem;
  line-height: 1.8rem;
  border: none;
  border-bottom: ${({ tagBorderStyled }) =>
    tagBorderStyled
      ? `none`
      : `1px solid ${Theme.BORDER};
  `};
  outline: none;

  &::placeholder {
    color: ${Theme.PLACEHOLDER};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
  }

  &:focus {
    border-bottom: ${({ tagBorderStyled }) =>
      tagBorderStyled
        ? `none`
        : `1px solid ${Theme.MAIN}
  `};
  }
`;

export const ImgLabel = styled.label`
  display: inline-block;
  width: 5.6rem;
  margin-right: 1.2rem;
  padding: 0.8rem 0;
  font-family: 'LINESeedKR-Bd';
  font-size: 1.4rem;
  color: ${Theme.MAIN_FONT};
`;
