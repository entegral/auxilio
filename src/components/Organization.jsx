import React from 'react';
import OrgUpdateList from './OrgUpdateList';
import OrgLeadList from './OrgLeadList';
import OrgDeptList from './OrgDeptList';
import { listStyleParent } from './helpers/jsStyleObjects';


function Organization () {
  return (
    <React.Fragment>
      <div style={listStyleParent}>
        <OrgUpdateList/>
        <OrgLeadList />
        <OrgDeptList />
      </div>
    </React.Fragment>
  );
};

export default Organization;