import React from 'react'
import { connect } from 'react-redux';
import { clearAuthData } from '../actions/authActions';
import { NavItem, Navbar } from 'react-materialize';
import {clearUserData} from '../actions/userDataActions';

class Header extends React.Component {
  
  constructor(props){
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.dispatch(clearAuthData());
    this.props.dispatch(clearUserData());
  }

  render(){

    const bannerStyleLoggedOut = {
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'center',
      backgroundColor: '#505050',
      width: '100%'
    }

    const headerStyle = {
      margin: '5px 5px 5px 20px',

    }

    const headerAnchorStyle = {
      textDecoration: 'none',
      color: 'lightgrey'
    }

    const navBarStyle = {
      paddingLeft: '20px'
    }

    if (this.props.userData.uid){

      return (
        <Navbar style={navBarStyle} brand='Auxilio' href='#' right className='grey darken-2'>
          <NavItem icon='account_box' href='#/profile' > My Profile </NavItem>
          <NavItem divider />
          <NavItem href='#/organizations'>  Organizations</NavItem>
          <NavItem href='#/departments'>Departments</NavItem>
          <NavItem href='#/jobs'>Jobs</NavItem>
          <NavItem divider />
          <NavItem onClick={this.signOut}>Sign Out</NavItem>
        </Navbar>
      );
    } else {
      
      return (
        <div style={bannerStyleLoggedOut}>
          <div>
            <h2 style={headerStyle} > <a style={headerAnchorStyle} href="/">Auxilio</a> </h2>
          </div>
        </div>
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    userAuthData: state.userAuthData,
    userData: state.userData
  };
};

export default connect(mapStateToProps)(Header);