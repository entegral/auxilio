import React from 'react';

function Organization ({ org }) {
  
  const orgDivStyle = {
    backgroundColor: '#838383',
    margin: '15px',
    padding: '20px',
    borderRadius: '3px'
  }

  const titleStyle = {
    color: 'lightgrey'
  }

  return (
    <React.Fragment>
      <div style={orgDivStyle}>
        <h6 style={titleStyle}>{ org.name }</h6>
      </div>
      
    </React.Fragment>
  );
  
};

export default Organization;