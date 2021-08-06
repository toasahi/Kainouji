import axios from 'axios';
import { useCallback, useState } from 'react';

export const useRegisterField = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const registerField = useCallback((data) => {
    // setLoading(true);
    // axios
    //   .put('http://localhost:4000/v1/filed', data)
    //   .then((res) => {
    //     setSuccess(true);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     alert('登録失敗');
    //     setLoading(false);
    //   });
    console.log(data);
  }, []);

  return { registerField, loading, success };
};
