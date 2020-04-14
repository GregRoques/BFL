import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
// import ReactGA from "react-ga";
// import { trackingId1 } from "./Aux/trackingIDs";


const history = createBrowserHistory();

// ReactGA.initialize([
//     {
//         trackingId: trackingId1,
//         gaOptions: { name: "webTracker" }
//     }
// ]);
// history.listen(location => {
//     ReactGA.set({
//         page: location.pathname
//     });
//     ReactGA.pageview(location.pathname, "webTracker");
// });

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
