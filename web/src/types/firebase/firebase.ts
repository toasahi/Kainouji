import firebase from 'firebase/compat/';
import User = firebase.User;

export type AuthContextProps = {
  currentUser: User | null | undefined;
  signInCheck: boolean;
};
