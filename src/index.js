import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import ReactGA from "react-ga4"; // npm i react-ga4
import { trackingId } from "./Aux/trackingIDs";


const history = createBrowserHistory();

ReactGA.initialize(trackingId)

history.listen(location => {
    ReactGA.send({ 
        hitType: "pageview",
        page: location.pathname
    }); 
  });


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
