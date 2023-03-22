import { useCallback, useEffect, useRef, useState } from 'react';

const useOutsideDetect = (initialStateValue) => {
  const [isShowOption, setIsShowOption] = useState(initialStateValue);
  const ref = useRef(null);

  const handleDisplayList = useCallback(() => {
    setIsShowOption((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleOutsideClickEvnet = (e) => {
      if (isShowOption && ref.current && !ref.current.contains(e.target)) {
        setIsShowOption(!isShowOption);
      }
    };

    if (isShowOption) {
      document.addEventListener('click', handleOutsideClickEvnet);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClickEvnet);
    };
  }, [isShowOption]);

  return [isShowOption, setIsShowOption, ref, handleDisplayList];
};

export default useOutsideDetect;
