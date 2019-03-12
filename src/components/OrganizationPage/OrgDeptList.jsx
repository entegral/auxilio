import React from 'react';
import OrgDeptDetail from './OrgDeptDetail';
import { listStyleChild } from '../../helpers/jsStyleObjects';

function OrgDeptList() {
  return (
    <div style={listStyleChild}>
      <OrgDeptDetail />
      <OrgDeptDetail />
    </div>
  );
}

export default OrgDeptList;