import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../constant/Firebase';
import { User } from '../types/api/user';
import { useLoginUser } from './useLoginUser';

export const useLogin = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (data: User) => {
      setLoading(true);
      auth
        .signInWithEmailAndPassword(data.email, data.password!)
        .then(() => {
          setLoading(false);
          history.push('/lookfield');
        })
        .catch(() => {
          setLoading(false);
          alert('ログインに失敗しました。');
        });
    },
    [history, setLoginUser],
  );
  return { login, loading };
};
