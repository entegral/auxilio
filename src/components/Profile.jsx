import React from 'react';
import UserProfileDisplay from './UserProfileDisplay';
import UserOrgDisplay from './UserOrgDisplay';
import UserJobDisplay from './UserJobDisplay';
import { listStyleParent } from './helpers/jsStyleObjects';

function Profile () {


  return (
    <div style={listStyleParent}>
      <UserProfileDisplay/>

      <UserOrgDisplay/>
      
      <UserJobDisplay/>
      
    </div>
  );
}

export default Profile;