import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import NewPlantView from './views/NewPlantView';
import EditPlantView from './views/EditPlantView';
import Toaster from './containers/Toaster';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path="/users/login" component={LoginView} />
            <Route path="/users/new" component={RegisterView} />
            <Route path="/plants/new" component={NewPlantView} />
            <Route path="/plants/:plantId/edit" component={EditPlantView} />
            <Route exact path="/" component={HomeView} />
          </Switch>
          <Toaster />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
