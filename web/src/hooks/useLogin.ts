import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../constant/Firebase';
import { User } from '../types/api/user';
import { useLoginUser } from './useLoginUser';
import { useFirebaseAuthResult } from './useFirebaseAuthResult';

export const useLogin = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const loginState = useCallback(() => {
    // setLoading(true);
    auth.onAuthStateChanged((user) => {
      setLoginUser(user);
    });
  }, []);

  const login = useCallback(
    (data: User) => {
      setLoading(true);
      auth
        .signInWithEmailAndPassword(data.email, data.password!)
        .then(() => {
          // setLoginUser(auth.currentUser);
          // auth.onAuthStateChanged((user) => {
          //   setLoginUser(user);
          //   console.log(`1: ${user?.uid}` )
          // });
          // loginState();
          setLoading(false);
          history.push('/lookfield');
        })
        .catch((error) => {
          useFirebaseAuthResult(error.code);
          setLoading(false);
        });
    },
    [history, setLoginUser],
  );

  return { login, loading, loginState };
};
