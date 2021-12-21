type FirebaseAuthResultStatus =
  | 'auth-successful'
  | 'auth/email-already-in-use'
  | 'auth/wrong-password'
  | 'auth/invalid-email'
  | 'auth/user-not-found'
  | 'auth/user-disabled'
  | 'auth/operation-not-allowed'
  | 'auth/too-many-requests'
  | 'auth/undefined';

export const useFirebaseAuthResult = (code: FirebaseAuthResultStatus) => {
  switch (code) {
    case 'auth-successful':
      alert('');
      break;
    case 'auth/email-already-in-use':
      alert('このメールアドレスは使用されています');
      break;
    case 'auth/wrong-password':
      alert('メールアドレスまたはパスワードが違います');
      break;
    case 'auth/invalid-email':
      alert('メールアドレスの形式が正しくありません');
      break;
    case 'auth/user-not-found':
      alert('ユーザーが存在しません');
      break;
    case 'auth/user-disabled':
      alert('無効なユーザーです');
      break;
    case 'auth/operation-not-allowed':
      alert('現在この認証方法はご利用頂けません');
      break;
    case 'auth/too-many-requests':
      alert('認証回数の上限回数を超えました');
      break;
    default:
      alert('少々お待ちください');
      break;
  }
};
