import React from 'react'
import { headerDiv, headerStyle, listStyleChild, listStyleParent } from '../../helpers/jsStyleObjects';
import { Button, Icon } from 'react-materialize';

function AddOrganization ({ org, addOrg }){

  const suggestedOrgStyle = {
    margin: '5px 0px 5px 0px',
    padding: '5px'
  }

  function onAddOrg(){
    addOrg(org.uid);
  }

  return(
    <div style={suggestedOrgStyle}>
      <div style={listStyleParent}>
        {org.name}
        <Button onClick={onAddOrg}><Icon>add</Icon></Button>
      </div>
    </div>
  );
};

export default AddOrganization;