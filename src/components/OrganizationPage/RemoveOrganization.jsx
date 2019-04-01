import React from 'react';
import {Button} from 'react-materialize';
import { Link } from 'react-router-dom';
import { setCurrentOrg } from '../../actions/organizationActions';
import { connect } from 'react-redux';

function RemoveOrganization({ org, removeOrg, dispatch }) {
  
  const orgDivStyle = {
    backgroundColor: '#838383',
    margin: '15px',
    padding: '20px',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center'
  }

  const titleStyle = {
    color: 'lightgrey',
    marginRight: '5px'
  }

  const styleGroup = {
    display: 'flex',
    alignItems: 'center',
    color: 'lightgrey'
  }
  
  function onRemoveOrg(){
    removeOrg(org.uid);
  }

  function navigateTo(){
    dispatch(setCurrentOrg(org.uid));
  }

  return (
    <React.Fragment>
      <div style={orgDivStyle}>
        <div style = {styleGroup}>
          <h6 style={titleStyle}>{ org.name }</h6>
          <Link style={titleStyle} to='/organization'><Button style={styleGroup} flat icon='arrow_forward' onClick={navigateTo}>Go</Button></Link>
        </div>
      
        <Button style={styleGroup} flat icon='delete' onClick={onRemoveOrg}>Remove</Button>
      </div>
      
    </React.Fragment>
  );
  
};



export default connect() (RemoveOrganization);