// import React, { createContext, Dispatch, SetStateAction, useState, VFC } from 'react';
// import { User } from '../types/api/user';
//
// type LoginUser = User;
//
// export type LoginUserContextType = {
//   loginUser: LoginUser | null;
//   setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
// };
//
// export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);
//
// export const LoginUserProvider = (props: { children: React.ReactNode }) => {
//   const { children } = props;
//   const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
//   return (
//     <>
//       <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>
//     </>
//   );
// };
//
import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { LoginUserProps } from '../types/firebase/firebase';

export type LoginUserContextType = {
  loginUser: LoginUserProps | null;
  setLoginUser: Dispatch<SetStateAction<LoginUserProps | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUserProps | null>(null);
  return (
    <>
      <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>
    </>
  );
};
