import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { axios } from '../constant/BaseAxios';
import { Result } from '../types/api/result';
import { User } from '../types/api/user';

export const useSingUp = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const params = new URLSearchParams();

  const singUp = useCallback(
    (data: User) => {
      params.append('email', data.email);
      params.append('password', data.password!!);
      params.append('username', data.username!!);
      setLoading(true);
      axios
        .post<Result>(`user`, params)
        .then((res) => {
          if (res.data.status === 200) {
            setLoading(false);
            history.push('/');
          } else {
            setLoading(false);
          }
        })
        .catch(() => {
          alert('登録に失敗しました');
          setLoading(false);
        })
        .finally(() => {
          params.delete('email');
          params.delete('password');
          params.delete('username');
        });
    },
    [history],
  );
  return { singUp, loading };
};
