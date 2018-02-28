import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App/App';

import jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';


render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
