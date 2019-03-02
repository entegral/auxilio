import React from 'react'

function Profile () {

  const componentStyle = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  const divColumnStyle = {
    float: 'left',
    border: '1px solid grey'
  }

  return (
    <div style={componentStyle}>
      <div style={divColumnStyle}>
        Profile picture area
      </div>

      <div style={divColumnStyle}>
        User information area
      </div>

      <div style={divColumnStyle}>
        <div>
          User Organization area
        </div>
        <div>
          User Job role area
        </div>
      </div>
    </div>
  );
}

export default Profile;