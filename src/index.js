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
ReactGA.send("pageview");

// history.listen(location => {
//   // console.log(location.pathname, location.hash)
//   ReactGA.set({ page: location.pathname })
//   ReactGA.pageview(location.pathname)
//   });


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
