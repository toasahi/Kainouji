import { useCallback, useState } from 'react';
import { axios } from '../constant/BaseAxios';

export const useUpdateThreshold = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const params = new URLSearchParams();
  const updateThreshold = useCallback((id: string, moisture: string) => {
    params.append('moisture', moisture);
    params.append('field_id', id);
    setLoading(true);
    axios
      .post('threshold', params)
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
        params.delete('field_id');
      });
  }, []);

  return { updateThreshold, loading, success };
};
