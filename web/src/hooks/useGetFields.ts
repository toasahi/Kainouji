import { useCallback, useState } from 'react';
import { axios } from '../constant/BaseAxios';
import { Field } from '../types/api/field';

export const useGetField = () => {
  const [fields, setFields] = useState<Array<Field>>();
  const [loading, setLoading] = useState(false);
  const getFields = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<Array<Field>>(`field/${id}`)
      .then((res) => {
        setFields(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { loading, getFields, fields };
};
