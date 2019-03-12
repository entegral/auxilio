import React from 'react'
import Organization from './Organization';
import { headerDiv, headerStyle, listStyleChild } from '../../helpers/jsStyleObjects';
import { Col, Row, Button, Icon, Modal } from 'react-materialize';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addExistingOrgToUser, addNewOrgToUser, removeOrgFromUser } from '../../apis/auxilioServerApi';
import { updateUserOrgAction } from '../../actions/organizationActions';

class SubscribedOrgs extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      _org_uid: '',
      _org_password: '',
      _org_name: ''
    }
    this.handleOrgPassword = this.handleOrgPassword.bind(this);
    this.handleOrgUid = this.handleOrgUid.bind(this);
    this.handleAddOrg = this.handleAddOrg.bind(this);
    this.handleOrgName = this.handleOrgName.bind(this);
    this.handleCreateOrg = this.handleCreateOrg.bind(this);
    this.handleRemoveOrgFromUser = this.handleRemoveOrgFromUser.bind(this);
  }

  componentDidMount(){
  }

  handleOrgUid(event){
    this.setState({_org_uid: event.target.value});
  }

  handleOrgName(event) {
    this.setState({ _org_name: event.target.value });
  }

  handleOrgPassword(event){
    this.setState({_org_password: event.target.value});
  }

  handleAddOrg(){
    addExistingOrgToUser(this.props.userAuthData.uid, this.state._org_uid).then((newUserOrgs)=>{
      this.props.dispatch(updateUserOrgAction(newUserOrgs));
      return <Redirect to='/organizations' />
    });
  }

  handleCreateOrg(){
    addNewOrgToUser(this.props.userAuthData.uid, this.state._org_name).then((newUserOrgs)=>{
      this.props.dispatch(updateUserOrgAction(newUserOrgs));
      return <Redirect to='/organizations' />
    })
  }

  handleRemoveOrgFromUser(org_uid){
    console.log(org_uid);
    removeOrgFromUser(this.props.userAuthData.uid, org_uid).then((newUserOrgs)=>{
      this.props.dispatch(updateUserOrgAction(newUserOrgs));
      return <Redirect to='/organizations' />
    })
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

    let inputStyle = {
      padding: '5px'
    };

    let message;

    console.log('authdata:', this.props.userAuthData);
    
    if (this.props.userAuthData && this.props.userAuthData.uid){
      this.props.orgList.length === 0 ? message = 'You haven\' added any organizations yet.' : message = 'Subscriptions';
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
                    header='Add Organization to Your List'
                    trigger={<Button style={buttonStyle} className='btn-small transparent lightgrey-text'><Icon className='small'>add</Icon></Button>}>
                    <form>
                      <input style={inputStyle} type="text" value={this.state._org_uid} onChange={this.handleOrgUid} placeholder='Org ID' />
                      <input style={inputStyle} type="text" value={this.state._org_password} onChange={this.handleOrgPassword} placeholder='Org Password' />
                      <button onClick={this.handleAddOrg} style={buttonStyle} className="btn waves-effect waves-light grey btn-flat" type="submit" name="action">Add
                  <Icon className="material-icons right">add</Icon>
                      </button>
                    </form>
                  </Modal>
                </h6> 
                {this.props.orgList.map((org) =>
                  <Organization 
                    org={org} 
                    key={org.uid}
                    removeOrg={this.handleRemoveOrgFromUser}/>
                )}
              </div>
            </Col>

            <Col s={12} m={4} l={4} >
              <div style={listStyleChild}>
                <h6 style={splitStyle}>
                  Create
                  <Modal
                    header='Create Organization'
                    trigger={<Button style={buttonStyle} className='btn-small transparent lightgrey-text'><Icon className='small'>create</Icon></Button>}>
                    <form>
                      <input style={inputStyle} type="text" value={this.state._org_name} onChange={this.handleOrgName} placeholder='Organization Name' />
                      <input style={inputStyle} type="text" value={this.state._org_password} onChange={this.handleOrgPassword} placeholder='Org Password (optional)' />
                      <button onClick={this.handleCreateOrg} style={buttonStyle} className="btn waves-effect waves-light grey btn-flat" type="submit" name="action">Create
                      <Icon className="material-icons right">create</Icon>
                      </button>
                    </form>
                  </Modal>
                </h6> 
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