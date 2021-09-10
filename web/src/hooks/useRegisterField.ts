import axios from 'axios';
import { useCallback, useState } from 'react';
import { RegisterData, FieldState } from '../types/api/field';

export const useRegisterField = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const params = new URLSearchParams();
  const registerField = useCallback((id: string, data: RegisterData) => {
    params.append('user_id', id);
    params.append('field_name', data.fieldName);
    params.append('vegetable_id', data.vegetable);
    params.append('setting_date', data.settingDay);
    if (data.image !== undefined && data.image.length !== 0) {
      params.append('image_name', data.image[0].name);
    } else {
      params.append('image_name', '');
    }
    setLoading(true);
    axios
      .post<FieldState>('http://localhost:4000/v1/field', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        setSuccess(true);
        alert('登録できました');
        setLoading(false);
      })
      .catch((error) => {
        alert('登録失敗');
        setLoading(false);
      })
      .finally(() => {
        params.delete('field_name');
        params.delete('vegetable_id');
        params.delete('setting_date');
        params.delete('image_name');
      });
  }, []);

  return { registerField, loading, success };
};
