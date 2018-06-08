import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/About" component={AboutPage}/>
            <Route exact path="/Projects" component={ProjectsPage}/>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
