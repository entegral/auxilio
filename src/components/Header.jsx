import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function Header () {
  
  const bannerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'darkgrey',
    marginBottom: '25px'
  }
  
  const headerStyle = {
    marginLeft: '20px'
  }

  const linkStyle = {
    float: 'left',
    margin: '10px'
  }
  
  return (
    <div style={bannerStyle}>
      <div>
        <h4 style={headerStyle}>Auxilio</h4>
      </div>

      <div>
        <a style={linkStyle} href='/#/'>Login</a>
        <a style={linkStyle} href='/#/profile'>Home</a>
      </div>
    </div>
  );
};

export default Header;