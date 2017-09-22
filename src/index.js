import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { addClass, removeClass, asyncLoop, sendMail } from './common';

import App from './components/App';

import Personal from './components/Personal';
import Professional from './components/Professional';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ App } />
      <Route path="/personal" component={ Personal } />
      <Route path="/professional" render={() => {
        return <Professional
                  addClass={ addClass }
                  removeClass={ removeClass }
                  sendMail={ sendMail }
                  asyncLoop={ asyncLoop } />;
      }} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
