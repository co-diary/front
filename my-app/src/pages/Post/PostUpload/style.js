import styled from 'styled-components';
import Theme from '../../../styles/Theme';
import IconSelectOn from '../../../assets/Icon-Select-on.png';
import IconSelectOff from '../../../assets/Icon-Select-off.png';

export const Container = styled.div`
  padding: 4.8rem 0 6rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SelectBoxWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 2.6rem 0 2.4rem;
`;

export const SelectBox = styled.div`
  position: relative;
  width: 8rem;
  font-size: 1.4rem;
  border: 1px solid ${Theme.BORDER};
  border-radius: 3.8rem;
  cursor: pointer;

  &:hover {
    border-color: ${Theme.MAIN};
  }
`;

export const CurrentSelect = styled.button`
  width: 100%;
  padding: 0.8rem 1.2rem;
  text-align: start;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    top: 0.6rem;
    right: 0.8rem;
    background: center / contain no-repeat;
    background-image: ${({ options }) =>
      options ? `url(${IconSelectOn})` : `url(${IconSelectOff})`};
  }
`;

export const ListBox = styled.ul`
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  background-color: ${Theme.WHITE};
  border: 1px solid ${Theme.MAIN};
  border-radius: 0.8rem;
  border-width: ${({ options }) => (options ? '1px' : '0')};
  max-height: ${({ options }) => (options ? 'none' : '0')};
  overflow: hidden;
  z-index: 99;
`;

export const ListOption = styled.li`
  margin: 0.4rem;
  padding: 0.7rem 0.8rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    font-family: 'LINESeedKR-Bd';
    background-color: ${Theme.MAIN};
  }

  & + li {
    margin-top: 0rem;
  }
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
  align-items: center;
  margin-bottom: ${(props) => props.length};
`;

export const Label = styled.label`
  display: inline-block;
  width: 5.6rem;
  margin-right: 1.2rem;
  padding: 0.4rem 0;
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
    color: ${Theme.PLACEHOLDER};
  }

  &:focus {
    border-bottom: 1px solid ${Theme.MAIN};
  }
`;

export const CalendarBtn = styled.img`
  position: absolute;
  top: 0.2rem;
  left: 12.4rem;
  width: 2rem;
  cursor: pointer;
`;

export const LocationBtn = styled.img`
  position: absolute;
  top: 0rem;
  right: 0;
  width: 2.2rem;
  cursor: pointer;
`;

export const RatingBox = styled.div`
  width: calc(100% - 5.6rem);

  & img {
    width: 2rem;
    cursor: pointer;
  }
`;

export const SubTitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.2rem;
  margin-bottom: 1.6rem;

  img {
    width: 2rem;
  }

  span {
    font-family: 'LINESeedKR-Bd';
    font-size: 1.4rem;
    line-height: 1.8rem;
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

export const TagLabel = styled.label`
  display: inline-block;
  width: 5.6rem;
  margin-right: 1.2rem;
  padding: 0.6rem 0;
  font-family: 'LINESeedKR-Bd';
  font-size: 1.4rem;
  color: ${Theme.MAIN_FONT};
`;

export const TagInput = styled.input`
  padding: 0.4rem 0;
  font-family: 'LINESeedKR-Rg';
  font-size: 1.4rem;
  line-height: 1.8rem;
  border: none;
  outline: none;

  &::placeholder {
    color: ${Theme.PLACEHOLDER};
  }
`;

export const TagList = styled.ul`
  display: flex;
  gap: 0.6rem;
  padding: 0.6rem 0 0.8rem;
  border-bottom: 1px solid ${Theme.BORDER};
`;

export const Tag = styled.li`
  padding: 0.5rem 1rem;
  height: 2.7rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${Theme.WHITE};
  border-radius: 3rem;
  background-color: ${Theme.SUB_ORANGE};
  cursor: pointer;

  & + li {
    background-color: ${Theme.SUB_PINK};
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

export const ImgLabelBtn = styled.label`
  width: 4.2rem;
  height: 3rem;
  border-radius: 3rem;
  cursor: pointer;

  img {
    width: 4.2rem;
    height: 3rem;
  }
`;
