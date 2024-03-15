import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { QueryClientProvider, QueryClient ,  } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { json } from 'react-router-dom';

let query = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider  client={query}>
    <App />
  </QueryClientProvider>
);
