import { useCallback, useState } from 'react';
import auth from '../constant/Firebase';
import { useHistory } from 'react-router';

export const useChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const changePassword = useCallback(
    (email: string) => {
      setLoading(true);
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          setLoading(false);
          history.push('/');
        })
        .catch((error) => {
          setLoading(false);
          alert('メールを送ることができませんでした');
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    [history],
  );

  return { changePassword, loading };
};
