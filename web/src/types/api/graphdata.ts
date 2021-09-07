// interface Graph {
//   Moisture?: {
//     moisture: string;
//     created_at: string;
//   };
//   Atomosphere?: {
//     atomosphere: string;
//     created_at: string;
//   };
//   Temperature?: {
//     temperature: string;
//     created_at: string;
//   };
//   Humidity?: {
//     humidity: string;
//     created_at: string;
//   };
// }

// export type GraphData = {
//   graph: Graph;
// };

export type Graph = {
  moisture: string;
  humidity: string;
  temperature: string;
  air_pressure: string;
  created_at: string;
};
