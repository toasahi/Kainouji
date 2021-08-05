import { useLocation } from 'react-router-dom';

export const useGetQuery = () => {
  return new URLSearchParams(useLocation().search);
};
