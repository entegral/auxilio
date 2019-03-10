import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { Icon, Button, SideNav, SideNavItem, NavItem, Navbar } from 'react-materialize';
import {Link } from 'react-router-dom';
class Header extends React.Component {
  
  constructor(props){
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.dispatch(logout())
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
          <NavItem icon='account_box' href='#!' ><Link to='/profile'> {this.props.userAuthData.email}</Link> </NavItem>
          <NavItem divider />
          <NavItem href='#!'> <Link to='/organizations'> Organizations</Link></NavItem>
          <NavItem waves href='#!'><Link to='/departments'>Departments</Link></NavItem>
          <NavItem waves href='#!'><Link to='/jobs'>Jobs</Link></NavItem>
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