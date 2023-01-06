import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './app';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>
);
