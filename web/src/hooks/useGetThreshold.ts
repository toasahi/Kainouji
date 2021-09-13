import axios from 'axios';
import { useCallback, useState } from 'react';
import { Threshold } from '../types/api/threshold';

export const useGetThreshold = () => {
  const [loading, setLoading] = useState(false);
  const [thresholds, setThresholds] = useState<Threshold>();

  const getThreshold = useCallback((field_id: string) => {
    setLoading(true);
    axios
      .get<Array<Threshold>>(`http://localhost:4000/v1/threshold/${field_id}`)
      .then((res) => setThresholds(res.data[0]))
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);

  return { loading, getThreshold, thresholds };
};
