import React from 'react'
import { headerDiv, headerStyle, listStyleChild, listStyleParent } from '../../helpers/jsStyleObjects';
import { Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize';

function AddOrganization ({ orgList, addOrg }){

  const suggestedOrgStyle = {
    margin: '5px 0px 5px 0px',
    padding: '5px'
  }

  function onAddOrg(){
    addOrg(org.uid);
  }

  return(

    { this.props.orgList.map((org) =>
      <div style={listStyleParent}>
        {org.name}
        <Button onClick={onAddOrg}><Icon>add</Icon></Button>
      </div>
      )
    }
    <Collapsible accordion defaultActiveKey={1}>
      <CollapsibleItem header='First' icon='filter_drama'>
        Lorem ipsum dolor sit amet.
      </CollapsibleItem>
          
    </Collapsible>

    <div style={suggestedOrgStyle}>
    </div>
  );
};

export default AddOrganization;