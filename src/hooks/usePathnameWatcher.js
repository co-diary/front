import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useRecoilState } from 'recoil';
import currentPath from '../atom/pathRecoil';

function usePathnameWatcher() {
  const location = useLocation();
  const { pathname } = location;
  const pathNameState = pathname.replace('/', '');

  const [pathNameValue, setPathNameValue] = useRecoilState(currentPath);

  useEffect(() => {
    setPathNameValue(pathname);
  }, [pathname, setPathNameValue]);

  console.log('hook동작', pathNameState);

  return pathNameState;
}

export default usePathnameWatcher;
