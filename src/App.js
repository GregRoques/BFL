import React, {Component} from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import cssApp from './app.module.css';

import Layout from "./Layout/HOC/Layout";
import Home from "./Home/Home";
import Faq from "./Faq/Faq";
import Contact from "./Contact/Contact";

class App extends Component {
  NoPage = () => {
    return <Redirect push to={Home} />;
};

serviceAbout = () => {
    return <Redirect push to="/faq/about" />;
}

  render() {
    return (
      <div className={cssApp.body}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/faq" component={this.FaqMain} />
            <Route exact path="/faq/:param" component={Faq} />
            <Route component={this.NoPage} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
