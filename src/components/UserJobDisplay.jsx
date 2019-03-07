import React from 'react'
import { listStyleChild } from './helpers/jsStyleObjects';

function UserJobDisplay() {

  {/* TODO: Map through all jobs associated with the user in this section to act as an overview of all activity */ }

  return (
    <React.Fragment>
      <div style={listStyleChild}>
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