import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/style.scss';
import App from '@pages/App';
// import TailwindTest from '@layouts/TailwindTest';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);
