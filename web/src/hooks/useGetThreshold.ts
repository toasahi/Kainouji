import { useCallback, useState } from 'react';
import { axios } from '../constant/BaseAxios';
import { Threshold } from '../types/api/threshold';

export const useGetThreshold = () => {
  const [loading, setLoading] = useState(false);
  const [thresholds, setThresholds] = useState<Threshold>();

  const getThreshold = useCallback((chip_id: string) => {
    setLoading(true);
    axios
      .get<Array<Threshold>>(`chip/${chip_id}`)
      .then((res) => setThresholds(res.data[0]))
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);

  return { loading, getThreshold, thresholds };
};
