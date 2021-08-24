import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
    <Helmet>
        <title>Hello World</title> 
      </Helmet>
    <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
