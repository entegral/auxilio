import React from 'react'

function Header () {
  
  const bannerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'darkgrey',
    marginBottom: '25px'
  }
  
  const headerStyle = {
    margin: '5px 5px 5px 20px'
  }

  const linkStyle = {
    float: 'left',
    margin: '10px'
  }
  
  return (
    <div style={bannerStyle}>
      <div>
        <h2 style={headerStyle}>Auxilio</h2>
      </div>

      <div>
        <a style={linkStyle} href='/#/'>Login</a>
        <a style={linkStyle} href='/#/organizations'>My Orgs</a>
        <a style={linkStyle} href='/#/profile'>Home</a>
      </div>
    </div>
  );
};

export default Header;