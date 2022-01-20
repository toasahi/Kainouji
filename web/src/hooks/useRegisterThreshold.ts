import { useCallback, useState } from 'react';
import { axios } from '../constant/BaseAxios';

export const useRegisterThresholds = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const params = new URLSearchParams();
  const registerThreshold = useCallback((id: string) => {
    params.append('field_id', id);
    setLoading(true);
    axios
      .post('chip/create', params)
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        params.delete('field_id');
      });
  }, []);

  return { registerThreshold, loading, success };
};
