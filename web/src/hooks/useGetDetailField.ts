import { useCallback, useState } from 'react';
import { axios } from '../constant/BaseAxios';
import { DetailField } from '../types/api/field';

export const useGetDetailField = () => {
  const [field, setField] = useState<DetailField>();
  const [loading, setLoading] = useState(false);
  const getDetailField = useCallback((field_id: string) => {
    axios
      .get<Array<DetailField>>(`field/detail/${field_id}`)
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          setField(res.data[0]);
        }
      })
      .catch(() => setLoading(false));
  }, []);

  return { getDetailField, loading, field };
};
