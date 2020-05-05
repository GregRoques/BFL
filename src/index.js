import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import ReactGA from "react-ga";
import { trackingId } from "./Aux/trackingIDs";


const history = createBrowserHistory();

ReactGA.initialize(trackingId);
history.listen(location => {
  ReactGA.set({ 
      page: location.pathname
  }); 
  ReactGA.pageview(location.pathname); 
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
