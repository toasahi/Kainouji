import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { User } from '../types/api/user';
import { useLoginUser } from './useLoginUser';

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
          } else {
          }
        })
        .catch(() => {});
    },
    [history, setLoginUser],
  );
  return { login, loading };
};
