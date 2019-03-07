import React from 'react'

function UserProfileDisplay () {

  const cardStyle = {
    backgroundColor: '#838383',
    padding: '0px 10px 10px 10px',
    margin: '20px'
  }

  return (
    <React.Fragment>
      <div style={cardStyle}>
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