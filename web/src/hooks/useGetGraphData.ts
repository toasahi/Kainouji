import { useCallback, useState } from 'react';
import { axios } from '../constant/BaseAxios';
import { Graph } from '../types/api/graphdata';

export const useGetGraphData = () => {
  const [graphData, setGraphData] = useState<Array<Graph>>([]);
  const [loading, setLoading] = useState(false);
  const getGraphData = useCallback((period: string, fieldId: string) => {
    setLoading(true);
    axios
      .get<Array<Graph>>(`graph/${fieldId}/period/${period}`)
      .then((res) => {
        setGraphData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { loading, getGraphData, graphData };
};
