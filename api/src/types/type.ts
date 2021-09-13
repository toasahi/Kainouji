export type Setting = {
  host: string;
  user: string;
  password: string;
  database: string;
  dateStrings: boolean;
};

export type Threshold = {
  moisture: number;
  temperature_high: number;
  temperature_low: number;
  humidity_high: number;
  humidity_low: number;
  air_pressure: number;
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
