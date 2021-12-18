import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../constant/Firebase';
import { User } from '../types/api/user';
import { axios } from '../constant/BaseAxios';
import { FieldState } from '../types/api/field';

export const useSingUp = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const singUp = useCallback(
    (data: User) => {
      setLoading(true);
      auth
        .createUserWithEmailAndPassword(data.email, data.password!)
        .then(() => {
          //データベースに登録
          // axios
          //   .post('user', auth.currentUser?.uid)
          //   .then((res) => {
          //     alert('ユーザを作成できました');
          //     setLoading(false);
          //   })
          //   .catch((error) => {
          //     setLoading(false);
          //     alert('ユーザを作成できませんでした');
          //   });
        })
        .catch((error) => {
          console.log(error.code);
          setLoading(false);
          alert('ユーザを作成できませんでした');
        });
    },
    [history],
  );
  return { singUp, loading };
};
