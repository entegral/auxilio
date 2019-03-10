import React from 'react';
import OrgUpdateList from './OrgUpdateList';
import OrgLeadList from './OrgLeadList';
import OrgDeptList from './OrgDeptList';
import { listStyleParent } from '../helpers/jsStyleObjects';
import { Col, Row} from 'react-materialize';

function Organization () {

  const orgHeaderStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <React.Fragment>
      <h1 style = {orgHeaderStyle}>[OrganizationTitle] Communications Page</h1>  
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