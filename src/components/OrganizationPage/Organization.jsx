import React from 'react';
import {Button, Icon} from 'react-materialize';

function Organization({ org, removeOrg }) {
  
  const orgDivStyle = {
    backgroundColor: '#838383',
    margin: '15px',
    padding: '20px',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between'
  }

  const titleStyle = {
    color: 'lightgrey'
  }

  
  function onRemoveOrg(){
    removeOrg(org.uid);
  }

  return (
    <React.Fragment>
      <div style={orgDivStyle}>
        <h6 style={titleStyle}>{ org.name }</h6>
        <Button onClick={onRemoveOrg}><Icon>delete</Icon></Button>
      </div>
      
    </React.Fragment>
  );
  
};

export default Organization;