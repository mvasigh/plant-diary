import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './views/Home';
import DayView from './views/DayView';
import UserLogin from './views/UserLogin';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path="/day" component={DayView} />
            <Route path="/users/login" component={UserLogin} />
            <Route path="/" component={Home} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
