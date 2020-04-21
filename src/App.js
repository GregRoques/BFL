import React, {Component} from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import cssApp from './app.module.css';

import Layout from "./Layout/HOC/Layout";
import Home from "./Home/Home";
import About from "./Faq/about";
import Shop from "./Faq/shop";
import SOS from "./Faq/sos";
import Contact from "./Contact/Contact";
import Reviews from "./Reviews/Reviews"

class App extends Component {
  NoPage = () => {
    return <Redirect push to={Home} />;
};

  render() {
    return (
      <div className={cssApp.body}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/sos" component={SOS} />
            <Route exact path= "/review" component= { Reviews } />
            <Route component={this.NoPage} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
