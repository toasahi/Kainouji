import axios from 'axios';
import { useCallback, useState } from 'react';
import { Graph } from '../types/api/graphdata';

export const useGetGraphData = () => {
  const [graphData, setGraphData] = useState<Array<Graph>>([]);
  const [loading, setLoading] = useState(false);
  const getGraphData = useCallback((period: string, id: string) => {
    setLoading(true);
    axios
      .get<Array<Graph>>(`http://localhost:4000/v1/graph/${id}/period/${period}`)
      .then((res) => {
        setGraphData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { loading, getGraphData, graphData };
};
