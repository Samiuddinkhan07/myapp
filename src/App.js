import React from 'react';
import {BrowserRouter as Router, Redirect, Route,Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import Newplaces from './places/pages/Place';
import MainNavigation from './shared/components/Navigation/MainNavigation';

//** We have installed react router v5 */



function App() {
  return <Router> 
      <MainNavigation/>
      <main>
      <Switch>
      <Route path='/users' exact>
        <Users/>
      </Route>
      <Route path='/places'>
        <Newplaces/>
      </Route>
        <Redirect to="/users"/>
      </Switch>
      </main>
  </Router>
    
  
}

export default App;
