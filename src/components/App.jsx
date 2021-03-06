import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Header from './Header';
import Login from './Login';
import Profile from './ProfilePage/Profile';
import SubscribedOrgs from './OrganizationPage/SubscribedOrgs'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/organizations' component={SubscribedOrgs} />
      </Switch>
    </React.Fragment>
  );
}

export default App;