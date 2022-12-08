import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { Provider } from 'react-redux'
import store from './Store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);
reportWebVitals();