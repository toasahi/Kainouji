import { useCallback, useState } from 'react';
import axios from 'axios';
import { Vegetable } from '../types/api/vegetable';

export const useGetVegitables = () => {
  const [loading, setLoading] = useState(false);
  const [vegetableLists, setVegetableLists] = useState<Array<Vegetable>>([]);

  const getVegetables = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<Vegetable>>('http://localhost:4000/v1/vegetable')
      .then((res) => setVegetableLists(res.data))
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);

  return { loading, vegetableLists, getVegetables };
};
