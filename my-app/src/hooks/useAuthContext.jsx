import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context; // state와 dispatch 함수가 들어 있음
};

export default useAuthContext;
