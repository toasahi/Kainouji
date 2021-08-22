import axios from 'axios';
import { useCallback, useState } from 'react';
import { Field } from '../types/api/field';

export const useGetField = () => {
  const [field, setField] = useState<Array<Field>>();
  const [loading, setLoading] = useState(false);
  const getField = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<Array<Field>>(`http://localhost:4000/v1/field/${id}`)
      .then((res) => {
        setField(res.data)
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { loading, getField,field };
};
