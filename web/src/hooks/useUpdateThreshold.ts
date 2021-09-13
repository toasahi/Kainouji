import axios from 'axios';
import { useCallback, useState } from 'react';

export const useUpdateThreshold = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const params = new URLSearchParams();
  const updateThreshold = useCallback((id: string, moisture: string) => {
    params.append('moisture', moisture);
    params.append('id', id);
    setLoading(true);
    axios
      .post('http://localhost:4000/v1/threshold', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        setSuccess(true);
        alert('更新しました');
        setLoading(false);
      })
      .catch((error) => {
        alert('失敗');
        setLoading(false);
      })
      .finally(() => {
        params.delete('moisture');
        params.delete('id');
      });
  }, []);

  return { updateThreshold, loading, success };
};
