import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const applyRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  applyRouter,
  document.getElementById('root')
);

reportWebVitals();