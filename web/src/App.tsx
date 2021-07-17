import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
${reset}

html,body{
  font-family: 'Noto Sans SC',"Yu Gothic Medium", "游ゴシック Medium", 'ヒラギノ角ゴ Pro W3', sans-serif;
  font-weight: 100%;
  margin:0;
  color: #141517;
  background-color:#F9F9F9;
}

a{
  color: #141517;
  text-decoration:none;
}

`;

export default App;
