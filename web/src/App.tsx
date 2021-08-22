import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { PrimaryButton } from './components/buttons/PrimaryButton';
import { Color } from './constant/BaseCss';
import { Router } from './router/Router';
import { Moisture } from './types/api/moisture';

function App() {
  console.log(process.env.REACT_APP_S3_BUCKET);
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
  font-weight: 999;
  margin:0;
  color: ${Color.primary};
  background-color:#F9F9F9;
}

a{
  color: ${Color.primary};
  text-decoration:none;
}

h1,h2,h3{
  font-family: 'Noto Sans SC',"Yu Gothic Medium", "游ゴシック Medium", 'ヒラギノ角ゴ Pro W3', sans-serif;
}

.animation{
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1.5s;
  }
  
`;

export default App;
