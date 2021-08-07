import axios from 'axios';
import { useCallback, useState } from 'react';
import { Threshold } from '../types/api/threshold';

export const useGetThreshold = () => {
  const [loading, setLoading] = useState(false);
  const [thresholds, setThresholds] = useState<Array<Threshold>>();

  const getThreshold = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<Threshold>>('http://localhost:4000/v1/threshold')
      .then((res) => setThresholds(res.data))
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);

  return { loading, getThreshold, thresholds };
};
