import axios from 'axios';
import { useCallback, useState } from 'react';
import { GraphData } from '../types/api/graphdata';
import { Moisture } from '../types/api/moisture';

export const useGetGraphData = () => {
  const [graphData, setGraphData] = useState<Array<GraphData>>([]);
  const [loading, setLoading] = useState(false);
  const getGraphData = useCallback((data: string, period: string, id: string) => {
    setLoading(true);
    console.log(`http://localhost:4000/v1/${data}/${id}/period/${period}`);
    axios
      .get<Array<GraphData>>(`http://localhost:4000/v1/${data}/${id}/period/${period}`)
      .then((result) => {
        setGraphData(result.data);
        console.log(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { loading, getGraphData, graphData };
};
