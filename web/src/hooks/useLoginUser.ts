import { useCallback, useContext, useState } from 'react';

import { LoginUserContext, LoginUserContextType } from '../providers/LoginUserProvider';
import { axios } from '../constant/BaseAxios';

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);

export const userInfoData = () => {
  const [userInfo, setUserInfo] = useState('');
  const userData = useCallback((id: string) => {
    axios
      .get(`user/${id}`)
      .then((res) => {
        setUserInfo(res.data[0].username);
      })
      .catch(() => {
        console.log('error');
      });
  }, []);
  return { userData, userInfo };
};
