import { useCallback, useState } from 'react';
import { axios } from '../constant/BaseAxios';
import { RegisterData, FieldState } from '../types/api/field';
import { useUploadImage } from './useUploadImage';

export const useRegisterField = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { uploadImage, finishUpload } = useUploadImage();
  const params = new URLSearchParams();
  const registerField = useCallback((id: string, data: RegisterData) => {
    params.append('user_id', id);
    params.append('field_name', data.fieldName);
    params.append('chip_id', data.chipId);
    params.append('vegetable_id', data.vegetable);
    params.append('setting_date', data.settingDay);
    if (data.image !== undefined && data.image.length !== 0) {
      params.append('image_name', data.image[0].name);
    } else {
      params.append('image_name', '');
    }
    setLoading(true);
    axios
      .post<FieldState>('field/create', params)
      .then((res) => {
        setSuccess(true);
        if (data.image !== undefined && data.image.length !== 0) {
          uploadImage(data.image[0]);
          if (!finishUpload) {
            alert('登録できました');
          }
        }
        setLoading(false);
      })
      .catch((error) => {
        alert('登録失敗');
        setLoading(false);
      })
      .finally(() => {
        params.delete('user_id');
        params.delete('field_name');
        params.delete('chip_id');
        params.delete('vegetable_id');
        params.delete('setting_date');
        params.delete('image_name');
      });
  }, []);

  return { registerField, loading, success };
};
