import React from 'react'
import Organization from './Organization';
import { headerDiv, headerStyle } from '../helpers/jsStyleObjects';
import { Col, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { AddOrganization } from './AddOrganization'
class SubscribedOrgs extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
  }

  render (){
    console.log('orgList:',this.props.orgList)
    if (this.props.orgList){
      return (
        <React.Fragment>
          <div style={headerDiv}>
            <h6 style={headerStyle}>My Organizations</h6>
          </div>
          <Row>
    
            <Col s={12} m={8} l={8} >
              <div>
                {this.props.orgList.map((org)=>  
                  <Organization org={org}/>
                )}
              </div>
            </Col>
    
          </Row>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <AddOrganization />
        </React.Fragment>
      )
    }

  }
};

const mapPropsToState = state => {
  return {
    orgList: state.orgs.subscribed,
    userAuth: state.userAuthData
  }
}

export default connect(mapPropsToState) (SubscribedOrgs);