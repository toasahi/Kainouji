import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import auth from '../constant/Firebase';
import { User } from '../types/api/userInfo';
import { useLoginUser } from './useLoginUser';
import { useFirebaseAuthResult } from './useFirebaseAuthResult';

export const useLogin = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const loginState = useCallback(() => {
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
