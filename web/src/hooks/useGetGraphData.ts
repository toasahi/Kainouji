import axios from 'axios';
import { useCallback, useState } from 'react';

export const useGetGraphData = () => {
  const [graphData, setGraphData] = useState();
  const [loading, setLoading] = useState(false);
  const getGraphData = useCallback((data: string, period: string, id: string) => {
    setLoading(true);
    console.log(`http://localhost:4000/v1/${data}/${id}/period/${period}`);
    axios
      .get(`http://localhost:4000/v1/${data}/${id}/period/${period}`)
      .then((result) => {
        console.log(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { loading, getGraphData };
};
