import { useCallback } from 'react';
import { useHistory } from 'react-router';
import {auth} from '../constant/Firebase'
import { User } from '../types/api/user';

export const useSingUp = () => {
  const history = useHistory();

  const singUp = useCallback(
    (data: User) => {
        auth.createUserWithEmailAndPassword(data.email,data.password!)
    },[history]);
  return { singUp };
};
