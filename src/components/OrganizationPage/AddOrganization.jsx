import React from 'react';
import { headerDiv, headerStyle, listStyleChild } from '../helpers/jsStyleObjects';
import { Col, Row } from 'react-materialize';

export function AddOrganization () {
  return (
    <React.Fragment>
      <div style={headerDiv}>
        <h6 style={headerStyle}>Add Organization</h6>
      </div>
      <Row>
        <Col s={12} m={6} l={6} >
          <div style= {listStyleChild}>
            <h6>Add existing Org</h6>
            
          </div>
        </Col>
        <Col s={12} m={6} l={6} >
          <div style= {listStyleChild}>
            <h6>Add new Org</h6>

          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}