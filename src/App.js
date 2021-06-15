import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { AlertState } from './context/alert/alertState';
import { GithubState } from './context/github/githubState';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
