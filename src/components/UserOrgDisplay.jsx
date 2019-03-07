import React from 'react'

function UserOrgDisplay () {

  const cardStyle = {
    backgroundColor: '#838383',
    padding: '0px 10px 10px 10px',
    margin: '20px'
  }

  {/* TODO: Map through all organizations associated with the user in this section to act as an overview of all activity */}

  return (
    <React.Fragment>
      <div style={cardStyle}>
        <h3>User-Organization's Title</h3>
        <div>
          Most recent organization update (card)
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserOrgDisplay;