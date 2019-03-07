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
    margin: '5px 5px 5px 20px',

  }

  const headerAnchorStyle = {
    textDecoration: 'none',
    color: 'black'

  }

  const linkStyle = {
    float: 'left',
    margin: '0px 20px 0px 0px',
    textDecoration: 'none',
    color: 'black'
  }
  
  return (
    <div style={bannerStyle}>
      <div>
        <h2 style={headerStyle} > <a style={headerAnchorStyle} href="/#/profile">Auxilio</a> </h2>
      </div>

      <div>
        <a style={linkStyle} href='/#/'>Login</a>
        <a style={linkStyle} href='/#/profile'>Home</a>
      </div>
    </div>
  );
};

export default Header;