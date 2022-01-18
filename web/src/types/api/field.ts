export type Field = {
  id: number;
  field_name: string;
  vegetable_id: number;
  setting_date: string;
  image_name: string;
  created_at: string;
  updated_at: string;
};

export type RegisterData = {
  fieldName: string;
  chipId: string;
  vegetable: string;
  settingDay: string;
  image?: FileList;
};

export type FieldState = {
  userId: string;
  fieldName: string;
  chipId?: number;
  vegetable: string;
  settingDay: string;
  image_name: string;
};
