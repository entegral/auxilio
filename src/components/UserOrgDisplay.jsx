import React from 'react'
import { listStyleChild } from './helpers/jsStyleObjects';

function UserOrgDisplay () {

  {/* TODO: Map through all organizations associated with the user in this section to act as an overview of all activity */}

  return (
    <React.Fragment>
      <div style={listStyleChild}>
        <h3>User-Organization's Title</h3>
        <div>
          Most recent organization update (card)
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserOrgDisplay;