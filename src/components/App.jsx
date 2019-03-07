import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Header from './Header';
import Login from './Login';
import Profile from './ProfilePage/Profile';
import Organization from './OrganizationPage/Organization'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/organization' component={Organization} />
      </Switch>
    </React.Fragment>
  );
}

export default App;