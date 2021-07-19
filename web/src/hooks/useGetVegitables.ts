import { useCallback, useState } from 'react';
import axios from 'axios';

export const useGetVegitables = () => {
  const [loading, setLoading] = useState(false);
  const [vegetables, setVegetables] = useState();

  const getVegetables = useCallback(() => {
    setLoading(true);
    axios
      .get('http://localhost:4000/v1/vegetable')
      .then((res) => setVegetables(res.data))
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);

  return { loading, vegetables, getVegetables };
};
