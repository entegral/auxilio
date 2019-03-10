import React from 'react';
import OrgLeadDetail from './OrgLeadDetail';
import { listStyleChild } from '../helpers/jsStyleObjects';

function OrgLeadList() {
  
  return (
    <div style={listStyleChild}>
      <OrgLeadDetail />
      <OrgLeadDetail />
    </div>
  );
}

export default OrgLeadList;