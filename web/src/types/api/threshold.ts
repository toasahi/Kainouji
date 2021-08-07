export type Threshold = {
  id: number;
  moisture: number;
  temperature_high: number;
  temperature_low: number;
  humidity_high: number;
  humidity_low: number;
  air_pressure: number;
  created_at?: string;
  updated_at?: string;
};
