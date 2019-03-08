import React from 'react'
import firebase from 'firebase';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

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

    const nameStyle = {
      float: 'left'
    }

    if (this.props.userData.uid){
      return (
        <div style={bannerStyle}>
          <div>
            <h2 style={headerStyle} > <a style={headerAnchorStyle} href="/#/">Auxilio</a> </h2>
          </div>

          <div>
            <p style={linkStyle}>{this.props.userData.email}</p>
            <a style={linkStyle} href="/#/" onClick={this.signOut}>Logout</a>
          </div>
        </div>
      );
    } else {
      return (
        <div style={bannerStyle}>
          <div>
            <h2 style={headerStyle} > <a style={headerAnchorStyle} href="/#/">Auxilio</a> </h2>
          </div>

          <div>
            <a style={linkStyle} href='/#/'>Login</a>
          </div>
        </div>
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    userData: state.userId
  };
};

export default connect(mapStateToProps)(Header);