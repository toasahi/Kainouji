import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { Result } from '../types/api/result';
import { User } from '../types/api/user';

export const useSingUp = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const params = new URLSearchParams();

  const singUp = useCallback(
    (data: User) => {
      params.append('email', data.email);
      params.append('password', data.password);
      params.append('username', data.username!!);
      setLoading(true);
      axios
        .post<Result>(`http://localhost:4000/v1/user`,params,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((res) => {
          if (res.data.status === 200) {
            setLoading(false)
            history.push('/login');
          } else {
            setLoading(false)
          }
        })
        .catch(() => {
          setLoading(false)
        }).finally(()=>{
          params.delete('email');
          params.delete('password');
          params.delete('username');
        });
    },
    [history],
  );
  return { singUp, loading };
};
