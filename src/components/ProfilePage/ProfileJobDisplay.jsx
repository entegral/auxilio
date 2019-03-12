import React from 'react'
import { listStyleChild } from '../../helpers/jsStyleObjects';

function ProfileJobPreview() {

  {/* TODO: Map through all jobs associated with the user in this section to act as an overview of all activity */ }

  return (
    <React.Fragment>
      <div style={listStyleChild}>
        <h5>ProfileJobDisplay - User's Job Titles</h5>
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

export default ProfileJobPreview;