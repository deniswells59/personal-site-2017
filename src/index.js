import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './components/App';
import Nav from './components/Nav';
import Personal from './components/Personal';
import Professional from './components/Professional';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ App } />
      <Route path="/personal" component={ Personal } />
      <Route path="/professional" component={ Professional } />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
