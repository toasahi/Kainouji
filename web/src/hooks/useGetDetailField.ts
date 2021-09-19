import { useCallback, useState } from 'react';
import { axios } from '../constant/BaseAxios';
import { Field } from '../types/api/field';

export const useGetDetailField = () => {
  const [field, setField] = useState<Field>();
  const [loading, setLoading] = useState(false);
  const getDetailField = useCallback((field_id: string) => {
    axios
      .get<Array<Field>>(`field/detail/${field_id}`)
      .then((res) => {
        setField(res.data[0]);
      })
      .catch(() => setLoading(false));
  }, []);

  return { getDetailField, loading, field };
};
