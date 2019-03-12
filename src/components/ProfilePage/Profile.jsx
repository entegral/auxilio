import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileInfoDisplay from './ProfileInfoDisplay';
import ProfileOrgDisplay from './ProfileOrgDisplay';
import ProfileJobDisplay from './ProfileJobDisplay';
import { headerDiv, headerStyle } from '../helpers/jsStyleObjects';
import {Col, Row} from 'react-materialize';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    
  }

  render() {

    const { uid } = this.props.userData; 
    
    
    
    if (uid) {
      return (
        <React.Fragment>
          <div style={headerDiv}>
            <h6 style={headerStyle}>My Profile</h6>
          </div>
          <Row>
            <Col s={12} m={8} l={8} >
              <ProfileInfoDisplay/>
            </Col>
            <Col s={12} m={4} l={4} >
              <ProfileOrgDisplay/>
            </Col>  
            <Col s={12} m={8} l={8} >
              <ProfileJobDisplay/>
            </Col>
          </Row>
        </React.Fragment>
      );
    } else {
      return(
        <Redirect to='/' />
      )
    }

  }

}

const mapStateToProps = state => {
  return {
    userAuthData: state.userAuthData,
    userData: state.userData
  }
}

export default connect (mapStateToProps)(Profile);