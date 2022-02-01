import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import auth from '../constant/Firebase';
import { User } from '../types/api/user';
import { axios } from '../constant/BaseAxios';
import { useFirebaseAuthResult } from './useFirebaseAuthResult';

export const useSingUp = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const params = new URLSearchParams();

  const singUp = useCallback(
    (data: User) => {
      setLoading(true);
      auth
        .createUserWithEmailAndPassword(data.email, data.password!)
        .then(() => {
          params.append('id', auth.currentUser?.uid!!);
          params.append('username', data.username!!);
          //データベースに登録
          axios
            .post('user/create', params)
            .then((res) => {
              alert('ユーザを作成できました');
              setLoading(false);
            })
            .catch((error) => {
              setLoading(false);
              alert('ユーザを作成できませんでした');
            });
        })
        .catch((error) => {
          useFirebaseAuthResult(error.code);
          setLoading(false);
        });
    },
    [history],
  );
  return { singUp, loading };
};
