import {useCallback, useState} from 'react';
import { useHistory } from 'react-router';
import { auth } from '../constant/Firebase';
import { User } from '../types/api/user';

export const useSingUp = () => {
  const history = useHistory();
  const [loading,setLoading] = useState(false)

  const singUp = useCallback(
    (data: User) => {
      setLoading(true)
      auth.createUserWithEmailAndPassword(data.email, data.password!).then(()=>{
        alert("ユーザを作成できました")
        setLoading(false)
      }).catch(()=>{
        alert("ユーザを作成できませんでした")
      })
    },
    [history],
  );
  return { singUp };
};
