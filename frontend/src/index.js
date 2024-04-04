import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/style.css';
import './static/css/animate.css';
import './static/css/font-awesome.css';
import './static/css/font-awesome.min.css';
import './static/css/activate.css';
import './static/css/register.css';
import './static/css/login.css';
import './static/css/resetPassword.css';
import './static/css/namari-color.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
