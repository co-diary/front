import styled from 'styled-components';
import Theme from '../../../styles/Theme';
// import IconSelectOn from '../../../assets/Icon-Select-on.png';
import IconSelectOff from '../../../assets/Icon-Select-off.png';

export const Container = styled.div`
  padding: 4.8rem 0 6rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

export const SelectBoxWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const SelectBox = styled.div`
  position: relative;
  width: 8rem;
  margin: 2.6rem 0 1.2rem;
  font-size: 1.4rem;
  border: 1px solid ${Theme.BORDER};
  border-radius: 3.8rem;
  cursor: pointer;

  &:hover,
  &:focus-within {
    border-color: ${Theme.MAIN};
  }

  button {
    width: 100%;
    padding: 0.9rem 1.2rem 0.6rem;
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
      background-image: url(${IconSelectOff});
    }
  }
`;

export const SectionBorder = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding-bottom: 1.4rem;
  border-bottom: 6px solid ${Theme.SECTION_BG};
`;

export const InputBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
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
