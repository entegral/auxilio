import React from 'react';
import OrgUpdateList from './OrgUpdateList';
import OrgLeadList from './OrgLeadList';
import OrgDeptList from './OrgDeptList';
import { listStyleParent } from './helpers/jsStyleObjects';


function Organization () {

  const orgHeaderStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <React.Fragment>
      <h4 style = {orgHeaderStyle}>[OrganizationTitle] Communications Page</h4>  
      <div style={listStyleParent}>
        <OrgUpdateList/>
        <OrgLeadList />
        <OrgDeptList />
      </div>
    </React.Fragment>
  );
};

export default Organization;