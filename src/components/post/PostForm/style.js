import styled from 'styled-components';
import Theme from '../../../styles/Theme';
import Sprites from '../../../assets/Sprites.png';
import { mobileMediaQuery } from '../../../styles/MediaQuery';

export const Container = styled.main`
  margin-top: 4.8rem;
  height: 100vh;
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
  margin-bottom: 2.8rem;
  border-bottom: 6px solid ${Theme.SECTION_BG};

  @media ${mobileMediaQuery} {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
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
  font-size: 1.4rem;
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
  background: url(${Sprites});
  background-size: calc(500px / 2) calc(436px / 2);
  background-position: calc(-282px / 2) calc(-310px / 2);

  position: absolute;
  top: 0rem;
  right: 0;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;

  &:hover {
    background-position: calc(-78px / 2) calc(-242px / 2);
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
    background: url(${Sprites});
    background-size: calc(500px / 2) calc(436px / 2);
    background-position: calc(-446px / 2) calc(-79px / 2);
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
  padding: ${({ tagBorderStyled }) =>
    tagBorderStyled
      ? `0.4rem 0 1rem 0`
      : `0.4rem 0
`};
  font-family: 'LINESeedKR-Rg';
  font-size: 1.4rem;
  line-height: 1.8rem;
  border: none;
  display: ${({ tagInputHeight }) =>
    tagInputHeight
      ? `none`
      : `block;
`};
  border-bottom: ${({ tagBorderStyled }) =>
    tagBorderStyled
      ? `none`
      : `1px solid ${Theme.BORDER};
  `};
  outline: none;

  &::placeholder {
    color: ${({ tagInputStyled }) =>
      tagInputStyled
        ? `transparent`
        : `${Theme.PLACEHOLDER};
  `};
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
