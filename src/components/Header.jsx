import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { Button } from 'react-materialize';

class Header extends React.Component {
  
  constructor(props){
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.dispatch(logout())
  }

  render(){
    
    const bannerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#505050',
      marginBottom: '25px'
    }
    
    const headerStyle = {
      margin: '5px 5px 5px 20px',

    }

    const headerAnchorStyle = {
      textDecoration: 'none',
      color: 'lightgrey'

    }

    const linkStyle = {
      float: 'left',
      margin: '0px 20px 0px 0px',
      border: '1px solid #888',
      color: 'lightgrey'

    }

    const loginStatus = {
      alignItems: 'center'
    }

    if (this.props.userData.uid){
      return (
        <div style={bannerStyle}>
            <h2 style={headerStyle} > <a style={headerAnchorStyle} href="/#/">Auxilio</a> </h2>

            <h5 style={linkStyle}>{this.props.userData.email}</h5>
            <Button style={linkStyle} className='btn-flat transparent grey-text text-lighten-1' waves='light' onClick={this.signOut} href='/#/'> Logout </Button>

        </div>
      );
    } else {
      return (
        <div style={bannerStyle}>
          <div>
            <h2 style={headerStyle} > <a style={headerAnchorStyle} href="/#/">Auxilio</a> </h2>
          </div>

          <div>
            <Button style={linkStyle} className='btn-flat transparent grey-text text-lighten-1' waves='light' node='a' href='/#/'> Login </Button>
          </div>
        </div>
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    userData: state.userAuthData
  };
};

export default connect(mapStateToProps)(Header);