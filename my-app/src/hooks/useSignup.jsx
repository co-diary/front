import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { appAuth } from '../firebase.js';
import { authState } from '../atom/authRecoil.js';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (!user) {
          throw new Error('회원가입에 실패했습니다.');
        }

        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            setAuth(user);
            setError(null);
            setIsPending(false);
            navigate('/home');
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return { error, isPending, signup };
};

export default useSignup;
