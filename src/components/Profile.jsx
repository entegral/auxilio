import React from 'react';
import UserProfileDisplay from './UserProfileDisplay';
import UserOrgDisplay from './UserOrgDisplay';
import UserJobDisplay from './UserJobDisplay';

function Profile () {

  const componentStyle = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  const divColumnStyle = {
    float: 'left',
    // border: '1px solid grey',
  }

  return (
    <div style={componentStyle}>
      <UserProfileDisplay style={divColumnStyle}/>

      
      <UserOrgDisplay style={divColumnStyle}/>
      

      
      <UserJobDisplay style={divColumnStyle} />
      
    </div>
  );
}

export default Profile;