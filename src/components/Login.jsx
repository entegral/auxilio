import React from 'react'
import { Link } from 'react-router-dom'

function Login () {

  const componentStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20%'
  }

  const buttonStyle = {
    width: '100%'
  }

  return (
    <React.Fragment>
      <div style={componentStyle}>
        <form>
          <input type="text" placeholder='email'/><br/>
          <input type="text" placeholder='password'/><br/>
          <button style={buttonStyle}><Link to='/profile'>Login</Link></button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;