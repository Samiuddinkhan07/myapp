import React from 'react';
import {BrowserRouter as Router, Redirect, Route,Switch} from 'react-router-dom'

import Users from './user/pages/Users';
import Newplaces from './places/pages/Place';

//** We have installed react router v5 */



function App() {
  return <Router> 
      <Switch>
      <Route path='/users' exact>
        <Users/>
      </Route>
      <Route path='/places'>
        <Newplaces/>
      </Route>
        <Redirect to="/users"/>
      </Switch>
    
  </Router>
    
  
}

export default App;
