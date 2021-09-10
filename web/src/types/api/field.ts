// export type Field = {
//   id: number;
//   fieldName: string;
//   vegetable_id: number;
//   threshold_id: number;
//   setting_date: string;
//   place: string;
//   imageUrl: File;
//   created_at: string;
//   updated_at: string;
// };

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
  vegetable: string;
  settingDay: string;
  image?: FileList;
};

export type FieldState = {
  userId: string;
  fieldName: string;
  vegetable: string;
  settingDay: string;
  image_name: string;
};
