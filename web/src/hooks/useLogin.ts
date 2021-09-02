import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { User } from '../types/api/user';
import { useLoginUser } from './useLoginUser';

export const useLogin = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (data: User) => {
      setLoading(true);
      axios
        .get<User>(`http://localhost:4000/v1/user/email/${data.email}/password/${data.password}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data);
            setLoading(false);
          } else {
            alert('ログインに失敗しました'); 
            setLoading(false);
          }
        })
        .catch(() => {});
    },
    [history, setLoginUser],
  );
  return { login, loading };
};
