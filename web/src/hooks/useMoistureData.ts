import { useCallback, useState } from 'react';
import axios from 'axios';

import { Moisture } from '../types/api/moisture';

export const useMoistureData = () => {
  const [loading, setLoading] = useState(false);
  const [moisture, setMoisture] = useState<Array<Moisture>>([]);

  const getMoistures = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<Moisture>>('http://localhost:4000/v1/moisture')
      .then((res) => setMoisture(res.data))
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);

  return { loading, moisture, getMoistures };
};
