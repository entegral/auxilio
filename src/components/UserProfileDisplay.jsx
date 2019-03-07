import React from 'react'
import { listStyleChild } from './helpers/jsStyleObjects';

function UserProfileDisplay () {

  return (
    <React.Fragment>
      <div style={listStyleChild}>
        <h3>User Data</h3>
        <p>First + Last Name</p>
        <p>email</p>
        <p>Last Year Attended</p>
        <p>First Year Attended</p>
      </div>
    </React.Fragment>
  );
}

export default UserProfileDisplay;