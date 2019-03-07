import React from 'react';
import { Redirect } from 'react-router-dom';
import {loginUser} from './firebase';
import { connect } from 'react-redux';
import { loginAction } from '../actions/authActions';

class Login extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.login = this.login.bind(this);
  }

  handleEmail(event) {
    this.setState({...this.state, email: event.target.value})
  }

  handlePassword(event){
    this.setState({ ...this.state, password: event.target.value })
  }

  login (event) {
    event.preventDefault();

    loginAction(this.state.email, this.state.password).then((action)=>{
      this.props.dispatch(action)
    });

    // const loginCredential = loginUser(this.state.email, this.state.password);
    // loginCredential.then((content)=>{
    //   console.log(content.user.uid)
    //   return <Redirect to='/#/profile' />
    // }).catch(() => {
    //   this.setState({email: '', password: ''});
    //   return <Redirect to='/' />
    // })
  }

  render() {

    const componentStyle = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10%'
    }

    const formStyle = {
      backgroundColor: '#838383',
      padding: '0px 30px 30px 30px'
    }

    const buttonStyle = {
      width: '100%'
    }

    const divstyle = {
      marginTop: '30px'
    }

    if (this.props.uid){
      return <Redirect to='/profile' />
    } else {
      return (
        <React.Fragment>
          <div style={componentStyle}>
            <form style={formStyle}>
              <div>
                <h3>Login</h3>
                <input type="text" value = {this.state.email} onChange={this.handleEmail} placeholder='email'/><br/>
                <input type="password" value={this.state.password} onChange={this.handlePassword} placeholder='password'/><br/>
                <button onClick={this.login} style={buttonStyle}>Login</button>
              </div>
              <div style={divstyle} >
                <button style={buttonStyle}> <a href="#">Signup</a> </button> 
              </div>
            </form>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    uid: state.uid
  };
};

export default connect(mapStateToProps)(Login);