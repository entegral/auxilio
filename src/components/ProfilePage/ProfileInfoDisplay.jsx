import React from 'react'
import { listStyleChild } from '../helpers/jsStyleObjects';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Button, Modal, Icon} from 'react-materialize';
import {updateUserData} from '../../apis/auxilioServerApi'
import {getUserDataAction} from '../../actions/userDataActions';

class ProfileInfoDisplay extends React.Component {

  constructor(props){
    super(props);
    console.log('component props', props)
    this.state = {
      _first_name: '',
      _last_name: '',
      _email: ''
    };
    console.log('prof display email', this.props.userData.email);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.fillKnownData = this.fillKnownData.bind(this);
  }

  componentDidMount(){
    this.timerID = setTimeout(()=>this.fillKnownData(), 1000);
  }

  fillKnownData(){
    console.log('props', this.props)
    this.setState(
      {
        _first_name: this.props.userData.first_name,
        _last_name: this.props.userData.last_name,
        _email: this.props.userData.email
      }
    )
  }

  handleEmail(event){
    this.setState({_email: event.target.value})
  }

  handleFirstName(event){
    this.setState({_first_name: event.target.value})
  }

  handleLastName(event) {
    this.setState({_last_name: event.target.value})
  }

  handleUpdateUser(){
    
    const updateUserApiPromise = updateUserData(this.props.userData.uid, this.state._first_name, this.state._last_name);
    updateUserApiPromise
      .then((json)=>{
        console.log(json);
        let updateReduxPromise = getUserDataAction(this.props.userData.uid)
        updateReduxPromise.then((action)=>{
          this.props.dispatch(action)
          return (<Redirect to='/profile' />)
        })
      })
      .catch((error)=>{
        console.log(error.message)
        alert(error.message)
      })
  }

  render(){

    const buttonStyle = {
      border: '1px solid lightgrey'
    }
  
    const headerStyle = {
      float:'left'
    }

    const {email, first_name, last_name, last_year_enrolled} = this.props.userData;


    return (
      <React.Fragment>  
        <div style={listStyleChild}>
          <h5 style={headerStyle}>Personal Information</h5>
            <Modal
              header='Edit User Info'
              fixedFooter
              trigger={<Button style={buttonStyle} className='small transparent lightgrey-text' icon='edit'></Button>}>
              <form>
                <input type="text" value = {this.state._first_name} onChange={this.handleFirstName} placeholder={first_name}/>
                <input type="text" value = {this.state._last_name} onChange={this.handleLastName} placeholder={last_name}/>
                <button onClick={this.handleUpdateUser} style={buttonStyle} className="btn waves-effect waves-light grey btn-flat" type="submit" name="action">Save
                  <Icon className="material-icons right">save</Icon>
                </button>
              </form>
            </Modal>
          
          <p>{email}</p>
          <p>{first_name + ' ' + last_name}</p>
          <p>Last Year Enrolled: {last_year_enrolled} </p>
          <p>First Year Attended</p>
        </div>
      </React.Fragment>
    );
  }  
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps) (ProfileInfoDisplay);