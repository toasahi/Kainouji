type FirebaseAuthResultStatus = {
  code:
    | 'Successful'
    | 'EmailAlreadyExists'
    | 'WrongPassword'
    | 'InvalidEmail'
    | 'UserNotFound'
    | 'UserDisabled'
    | 'OperationNotAllowed'
    | 'TooManyRequests'
    | 'Undefined';
};

export const useFirebaseAuthResult = ({ code }: FirebaseAuthResultStatus) => {
  switch (code) {
    case 'Successful':
      alert('');
      break;
    case 'EmailAlreadyExists':
      alert('');
      break;
    case 'WrongPassword':
      alert('');
      break;
    case 'InvalidEmail':
      alert('');
      break;
    case 'UserNotFound':
      alert('');
      break;
    case 'UserDisabled':
      alert('');
      break;
    case 'OperationNotAllowed':
      alert();
      break;
    case 'UserNotFound':
      alert('');
      break;
    default:
      alert('');
      break;
  }
};
