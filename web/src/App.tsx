import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrimaryButton } from './components/buttons/PrimaryButton';
import { Router } from './router/Router';
import { Moisture } from './types/api/moisture';

function App() {
  const [loading, setLoading] = useState(false);
  const [moisture, setMoisture] = useState<Array<Moisture>>([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get<Array<Moisture>>('http://localhost:4000/v1/moisture')
      .then((res) => setMoisture(res.data))
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);
  console.log(moisture);
  return (
    <div className="App">
      <PrimaryButton />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
