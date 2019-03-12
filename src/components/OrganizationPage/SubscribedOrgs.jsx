import React from 'react'
import Organization from './Organization';
import { headerDiv, headerStyle, listStyleChild } from '../helpers/jsStyleObjects';
import { Col, Row, Button, Icon, Modal } from 'react-materialize';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SubscribedOrgs extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
  }

  render (){

    const splitStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItem: 'center',
    }

    const buttonStyle = {
      border: '1px solid lightgrey'

    }

    let message;
    console.log('authdata:', this.props.userAuthData);
    if (this.props.userAuthData && this.props.userAuthData.uid){
      this.props.orgList.length === 0 ? message = 'You haven\' added any organizations yet.' : message = '';
      return (
        <React.Fragment>
          <div style={headerDiv}>
            <h6 style={headerStyle}>My Organizations</h6>
          </div>
          <Row>

            <Col s={12} m={8} l={8} >
              <div style={listStyleChild}>
                <h6 style = {splitStyle}>
                  {message}
                  <Modal
                    header='Modal Header'
                    trigger={<Button style={buttonStyle} className='btn-small transparent lightgrey-text'><Icon className='small'>add</Icon></Button>}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </Modal>
                </h6> 
                {this.props.orgList.map((org) =>
                  <Organization org={org} />
                )}
              </div>
            </Col>

          </Row>
        </React.Fragment>
      );
      
    } else {
      return <Redirect to='/'/>
    }
    

  }
};

const mapPropsToState = state => {
  return {
    orgList: state.orgs.subscribed,
    userAuthData: state.userAuthData
  }
}

export default connect(mapPropsToState) (SubscribedOrgs);