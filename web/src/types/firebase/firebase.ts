import firebase from 'firebase/compat/';
import User = firebase.User;

export type AuthContextProps = {
  currentUser: User | null;
};

export type LoginUserProps = {
  uid?: string;
  email?: string | null;
};
