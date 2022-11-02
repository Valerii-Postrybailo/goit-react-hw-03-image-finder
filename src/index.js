import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import css from "./styles.module.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className = {css.App}/>
  </React.StrictMode>
);
