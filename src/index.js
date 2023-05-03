import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import { firebase } from './firebase.js';
import { BrowserRouter } from "react-router-dom";

console.log(firebase);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

