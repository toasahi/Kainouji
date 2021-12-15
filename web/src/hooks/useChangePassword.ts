import { useCallback, useState } from 'react';
import { updatePassword } from 'firebase/auth';
import { auth } from '../constant/Firebase';
import { useHistory } from 'react-router';

export const useChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const changePassword = useCallback(
    (password: string) => {
      setLoading(true);
      // updatePassword(auth.currentUser!, password)
      //   .then(() => {
      //     setLoading(false);
      //     history.push('/');
      //   })
      //   .catch((error) => {
      //     setLoading(false);
      //     alert('パスワードの文字数が足りません');
      //   });
      //   auth.sendPasswordResetEmail(()=>{
      //
      //   })
    },
    [history],
  );

  return { changePassword, loading };
};
