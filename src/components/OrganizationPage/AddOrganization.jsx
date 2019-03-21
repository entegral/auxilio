import React from 'react'
import { headerDiv, headerStyle, listStyleChild, listStyleParent } from '../../helpers/jsStyleObjects';
import { Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize';

function AddOrganization ({ orgList, addOrg }){

  const suggestedOrgStyle = {
    margin: '5px 0px 5px 0px',
    padding: '5px'
  }

  const onAddOrg = index => 
    addOrg(orgList[index].uid);
  
  console.log('orgList',orgList);

  return(

    <Collapsible accordion defaultActiveKey={1}>

      { orgList.map((org, index) => {
        console.log('org', org)
        return (
        <CollapsibleItem header={org.name} icon='organization' key={index}>
          This org is named {org.name}.
          <Button onClick={onAddOrg(index)}><Icon>add</Icon></Button>

        </CollapsibleItem>)}
      )};

    </Collapsible>
  );
};

export default AddOrganization;