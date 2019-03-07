import React from 'react'

function UserJobDisplay() {

  const cardStyle = {
    backgroundColor: '#838383',
    padding: '0px 10px 10px 10px',
    margin: '20px'
  }

  {/* TODO: Map through all jobs associated with the user in this section to act as an overview of all activity */ }

  return (
    <React.Fragment>
      <div style={cardStyle}>
        <h3>User's Job Titles</h3>
        <ul>
          <li>Org Name
            <ul>
              <li>Job 1</li>
              <li>Job 2</li>
            </ul>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default UserJobDisplay;