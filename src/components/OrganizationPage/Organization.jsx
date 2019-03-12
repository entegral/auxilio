import React from 'react';
import OrgUpdateList from './OrgUpdateList';
import OrgLeadList from './OrgLeadList';
import OrgDeptList from './OrgDeptList';
import { headerDiv, headerStyle } from '../helpers/jsStyleObjects';
import { Col, Row} from 'react-materialize';

function Organization () {
  
  return (
    <React.Fragment>
      <div style={headerDiv}>
        <h6 style={headerStyle}>My Organizations</h6>
      </div>
      <Row>

        <Col s={12} m={8} l={8} >
          <OrgUpdateList />
        </Col>
        <Col s={12} m={4} l={4}>
          <OrgLeadList />
        </Col>
        <Col s={12} m={8} l={8}>
          <OrgDeptList />
        </Col>
      
      </Row>
    </React.Fragment>
  );
  
};

export default Organization;