import React from 'react';
import OrgUpdateDetail from './OrgUpdateDetail';
import { listStyleChild } from '../../helpers/jsStyleObjects';

function OrgUpdateList() {
  return (
    <div style={listStyleChild}>
      <OrgUpdateDetail />
      <OrgUpdateDetail />
    </div>
  );
}

export default OrgUpdateList;