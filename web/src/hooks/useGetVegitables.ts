import { useCallback, useState } from 'react';
import { axios } from '../constant/BaseAxios';
import { Vegetable } from '../types/api/vegetable';

export const useGetVegitables = () => {
  const [loading, setLoading] = useState(false);
  const [vegetableLists, setVegetableLists] = useState<Array<Vegetable>>([]);
  const [detailVegetable, setDetailVegetable] = useState<Vegetable>();

  const getVegetables = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<Vegetable>>('vegetable')
      .then((res) => setVegetableLists(res.data))
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);

  const getDetailVegetable = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<Array<Vegetable>>(`vegetable/${id}`)
      .then((res) => setDetailVegetable(res.data[0]))
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);

  return { loading, vegetableLists, getVegetables, detailVegetable, getDetailVegetable };
};
