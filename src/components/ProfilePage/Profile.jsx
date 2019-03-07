import React from 'react';
import ProfileInfoDisplay from './ProfileInfoDisplay';
import ProfileOrgDisplay from './ProfileOrgDisplay';
import ProfileJobDisplay from './ProfileJobDisplay';
import { listStyleParent } from '../helpers/jsStyleObjects';

function Profile () {

  const profileStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <React.Fragment>
      <h3 style={profileStyle}>[User] Profile</h3>  
      <div style={listStyleParent}>
        <ProfileInfoDisplay/>

        <ProfileOrgDisplay/>
        
        <ProfileJobDisplay/>
        
      </div>
    </React.Fragment>
  );
}

export default Profile;