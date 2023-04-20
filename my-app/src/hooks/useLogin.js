import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { authState } from '../atom/authRecoil';
import { appAuth } from '../firebase';

export default function useLogin() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const login = (email, password) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setAuth(user);
        setError(null);
        setIsPending(false);
        navigate('/home');

        if (!user) {
          throw new Error('로그인에 실패했습니다.');
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return { error, isPending, login };
}
