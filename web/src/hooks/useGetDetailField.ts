import axios from 'axios';
import { useCallback, useState } from 'react';
import { Field } from '../types/api/field';

export const useGetDetailField = () => {
  const [loading, setLoading] = useState(false);
  const getDetailField = useCallback((field_id: string) => {
    axios
      .get<Array<Field>>(`http://localhost:4000/v1/field/detail/${field_id}`)
      .then((res) => {})
      .catch(() => setLoading(false));
  }, []);
};
