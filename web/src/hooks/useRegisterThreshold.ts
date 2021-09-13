import axios from 'axios';
import { useCallback, useState } from 'react';

export const useRegisterThresholds = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const params = new URLSearchParams();
  const registerThreshold = useCallback((id: string) => {
    params.append('field_id', id);
    setLoading(true);
    axios
      .post('http://localhost:4000/v1/threshold/add', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      })
      .finally(() => {
       params.delete('field_id');
  })}, []);

  return { registerThreshold, loading, success };
};
