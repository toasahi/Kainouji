import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { axios } from '../constant/BaseAxios';
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
        .get<Array<User>>(`user/email/${data.email}/password/${data.password}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data[0]);
            setLoading(false);
            history.push('/lookfield');
          } else {
            alert('ログインに失敗しました');
            setLoading(false);
          }
        })
        .catch(() => alert('ログインに失敗しました'));
    },
    [history, setLoginUser],
  );
  return { login, loading };
};
