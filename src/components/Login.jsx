import React from 'react'
import { Link } from 'react-router-dom'

function Login () {

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

  return (
    <React.Fragment>
      <div style={componentStyle}>
        <form style={formStyle}>
          <div>
            <h3>Login</h3>
            <input type="text" placeholder='email'/><br/>
            <input type="text" placeholder='password'/><br/>
            <button style={buttonStyle}><Link to='/profile'>Login</Link></button>
          </div>
          <div style={divstyle} >
            <button style={buttonStyle}> <a href="#">Signup</a> </button> 
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;