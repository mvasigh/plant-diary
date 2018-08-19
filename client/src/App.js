import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path="/users/login" component={LoginView} />
            <Route path="/users/new" component={RegisterView} />
            <Route path="/" component={HomeView} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
