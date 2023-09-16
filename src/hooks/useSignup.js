import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router';
import { setDoc, doc } from 'firebase/firestore';
import { appAuth, db } from '../firebase.js';
import { authState } from '../atom/authRecoil.js';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/home';

  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;

        if (!user) {
          throw new Error('회원가입에 실패했습니다.');
        }

        updateProfile(appAuth.currentUser, { displayName })
          .then(async () => {
            setAuth(user);
            setError(null);
            setIsPending(false);
            navigate(from);

            await setDoc(doc(db, 'users', uid), {
              uid,
              email,
              password,
              displayName,
            });
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
