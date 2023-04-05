import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.div`
  padding: 4.8rem 0 6rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const CalendarBtn = styled.img`
  position: absolute;
  top: 0.2rem;
  left: 14.6rem;
  width: 2rem;
`;

export const LocationBtn = styled.img`
  position: absolute;
  top: 0rem;
  right: 0;
  width: 2.2rem;
  cursor: pointer;
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

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
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
