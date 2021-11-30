import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { Color } from './constant/BaseCss';
import { LoginUserProvider } from './providers/LoginUserProvider';
import { Router } from './router/Router';

function App() {
  return (
    <LoginUserProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LoginUserProvider>
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
  font-family: 'Noto Sans JP',"Yu Gothic Medium", "游ゴシック Medium", 'ヒラギノ角ゴ Pro W3', sans-serif;
}

.animation{
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1.5s;
  }
  
`;

export default App;
