import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction, signUpAction } from '../actions/authActions';
import { saveUserDataAction, getUserDataAction } from '../actions/userDataActions';
import { errorAction } from '../actions/errorActions';
import { getUserOrgsAction, updateSuggestedOrgActions } from '../actions/organizationActions';
import { getPublicOrgs, getUserOrgs, saveUserData, getUserData } from '../apis/auxilioServerApi';

class Login extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      error_message: ''
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.login = this.login.bind(this);
    this.createUser = this.createUser.bind(this);
  };

  handleEmail(event) {
    this.setState({email: event.target.value});
  };

  handlePassword(event){
    this.setState({ password: event.target.value });
  };

  handleConfirmPassword(event) {
    this.setState({ confirm_password: event.target.value });
  };

  login (event) {
    event.preventDefault();
    loginAction(this.state.email, this.state.password)
      .then((action)=>{this.props.dispatch(action)})
      .then(()=>{
        getUserData(this.props.userAuthData.uid)
          .then((action) => { 
            if (action.error){
              throw action;
            }
            this.props.dispatch(getUserDataAction(action)) 
          })
          .catch((loginError) => { this.props.dispatch(errorAction(loginError.message)) });
        getUserOrgs(this.props.userAuthData.uid)
          .then((userOrgs) => { 
            if (userOrgs.error){
              throw userOrgs;
            }
            this.props.dispatch(getUserOrgsAction(userOrgs)) 
          })
          .catch((loginError) => { this.props.dispatch(errorAction(loginError.message)) });
        getPublicOrgs(this.props.userAuthData.uid)
          .then((suggestedOrgs) => { 
            if (suggestedOrgs.error){
              throw suggestedOrgs;
            }
            this.props.dispatch(updateSuggestedOrgActions(suggestedOrgs)) 
          })
          .catch((loginError) => { this.props.dispatch(errorAction(loginError.message)) });
      })
      .catch((loginError) => {this.props.dispatch(errorAction(loginError.message))});
  };

  createUser (event){
    event.preventDefault();
    if (this.state.password === this.state.confirm_password){
      signUpAction(this.state.email, this.state.password)
        .then((action)=>{this.props.dispatch(action)})
        .then(()=>{
          saveUserData(this.state.email, this.props.userAuthData.uid)
            .then((userData) => { this.props.dispatch(saveUserDataAction(userData)) })
            .then(()=>{
              getUserOrgs(this.props.userAuthData.uid)
                .then((userOrgs) => { this.props.dispatch(getUserOrgsAction(userOrgs)) })
                .catch((loginError) => { this.props.dispatch(errorAction(loginError.message)) });
              getPublicOrgs(this.props.userAuthData.uid)
                .then((suggestedOrgs) => { this.props.dispatch(updateSuggestedOrgActions(suggestedOrgs)) })
                .catch((loginError) => { this.props.dispatch(errorAction(loginError.message)) });
            })
            .catch((loginError) => { this.props.dispatch(errorAction(loginError.message)) });
        })
        .catch((loginError) => {this.props.dispatch(errorAction(loginError.message))});
    } else {
      this.props.dispatch(errorAction('the passwords you entered did not match.'));
    };
  };

  render() {

    const componentStyle = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '5%',
    }

    const formStyle = {
      backgroundColor: '#505050',
      padding: '30px 30px 30px 30px',
      borderRadius: '3px'
    }

    const buttonStyle = {
      width: '100%',
      color: 'lightgrey',
      backgroundColor: 'transparent',
      border: '1px solid lightgrey',
      margin: '10px 0px 10px 0px'
    }

    let inputStyle;
    if (!this.props.errors.message){
      inputStyle = {
        textAlign: 'center'
      }
    } else {
      inputStyle = {
        textAlign: 'center',
        border: '1px solid red',
      }
    };

    const divstyle = {
      marginTop: '20px'
    }

    const pStyle = {
      textAlign: 'center',
      color: 'lightgrey',
      marginTop: '30px'
    }

    const errorStyle = {
      color: 'red',
      width: '175px',
      textAlign: 'center',
    }

    if (this.props.userData.uid){
      return <Redirect to='/profile' />
    } else {
      return (
        <React.Fragment>
          <div style={componentStyle}>
            <form style={formStyle}>
              <div>
                <input style={inputStyle} type="text" value = {this.state.email} onChange={this.handleEmail} placeholder='email'/><br/>
                <input style={inputStyle} type="password" value={this.state.password} onChange={this.handlePassword} placeholder='password'/><br/>
                <button onClick={this.login} style={buttonStyle}>Login</button>
              </div>

              <p style={pStyle}>or</p>
              <div style={divstyle} >
                <input style={inputStyle} type="password" value={this.state.confirm_password} onChange={this.handleConfirmPassword} placeholder='confirm password to' /><br />
                <button onClick={this.createUser} style={buttonStyle}>Signup</button> 
              </div>
              <p style={errorStyle}>{this.props.errors.message}</p>
            </form>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    userAuthData: state.userAuthData,
    userData: state.userData,
    errors: state.errors
  };
};

export default connect(mapStateToProps)(Login);