export type Setting = {
  host: string;
  user: string;
  password: string;
  database: string;
  dateStrings: boolean;
  connectionLimit: number;
};

export type Threshold = {
  moisture: number;
  temperatureHigh: number;
  temperatureLow: number;
  humidityHigh: number;
  humidityLow: number;
  airPressure: number;
};

export type Field = {
  user_id: string;
  field_name: string;
  vegetable_id: string;
  setting_date: string;
  image_name?: string;
};

export type User = {
  email: string;
  password: string;
  username?: string;
  status?: string;
};

export type Field2 = {
  userId: string;
  fieldName: string;
  vegetableId: string;
  settingDate: string;
  imageName?: string;
};
