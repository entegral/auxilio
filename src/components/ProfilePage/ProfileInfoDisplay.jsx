import React from 'react'
import { listStyleChild } from '../../helpers/jsStyleObjects';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Button, Modal, Icon} from 'react-materialize';
import {updateUserData} from '../../apis/auxilioServerApi'
import {getUserDataAction} from '../../actions/userDataActions';

class ProfileInfoDisplay extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      _first_name: '',
      _last_name: '',
      _email: ''
    };
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
    const updateUserApiPromise = updateUserData(this.props.userData.id, this.props.userData.uid, this.state._first_name, this.state._last_name);
    updateUserApiPromise
      .then((userData)=>{
        this.props.dispatch(getUserDataAction(userData));
        return <Redirect to='/profile' />
      })
      .catch((error)=>{
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

    const {email, first_name, last_name} = this.props.userData;

    const sectionStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
    
    let inputStyle = {
      padding: '5px'
    };

    if (first_name === this.state._first_name && last_name === this.state._last_name){
      inputStyle = {
        padding: '5px',
        border: '1px solid green'
      }
    }

    return (
      <React.Fragment>  
        <div style={listStyleChild}>
          <div style={sectionStyle}>
            <h5 style={headerStyle}>Contact Information</h5>
            <Modal
              header='Edit User Info'
              fixedFooter
              trigger={<Button style={buttonStyle} className='btn-small transparent lightgrey-text'><Icon className='small'>edit</Icon></Button>}>
              <form>
                <input style={inputStyle} type="text" value = {this.state._first_name} onChange={this.handleFirstName} placeholder='First Name'/>
                <input style={inputStyle} type="text" value = {this.state._last_name} onChange={this.handleLastName} placeholder='Last Name'/>
                <button onClick={this.handleUpdateUser} style={buttonStyle} className="btn waves-effect waves-light grey btn-flat" type="submit" name="action">Save
                  <Icon className="material-icons right">save</Icon>
                </button>
              </form>
            </Modal>
          </div>
          
          <label htmlFor='email'>Email</label>
          <p name='email'>{email}</p>
          <label htmlFor='name'>Name</label>
          <p name='name'>{first_name + ' ' + last_name}</p>
          
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