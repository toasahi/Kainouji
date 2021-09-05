import axios from 'axios';
import { useCallback, useState } from 'react';

type State = {
  fieldName: string;
  vegetable: string;
  settingDay: string;
  settingPlace?: string;
  imageUrl?: string;
};

export const useRegisterField = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const params = new URLSearchParams();
  const registerField = useCallback((data: State) => {
    params.append('field_name', data.fieldName);
    params.append('vegetable_id', data.vegetable);
    params.append('setting_date', data.settingDay);
    params.append('image_url', data.imageUrl ?? '');
    setLoading(true);
    axios
      .post<State>('http://localhost:4000/v1/field', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        alert('登録失敗');
        setLoading(false);
      }).finally(()=>{
        params.delete('field_name');
        params.delete('vegetable_id');
        params.delete('setting_date');
        params.delete('image_url');
      });
    console.log(data);
  }, []);

  return { registerField, loading, success };
};
