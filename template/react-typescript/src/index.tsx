import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import { BrowserRouter } from 'react-router-dom';
import RouterView from 'src/components/RouterView';
import 'src/styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterView router={router} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
