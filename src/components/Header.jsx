import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
    return <Redirect to='/'/>
  }

  render(){


    const navBarStyle = {
      paddingLeft: '20px'
    }

    if (this.props.userData.uid){

      return (
        <Navbar style={navBarStyle} brand='Auxilio' href='#' right className='grey darken-2'>
          <NavItem icon='account_box' href='#/profile' > My Feed </NavItem>
          <NavItem icon='account_box' href='#/profile' > My Profile </NavItem>
          <NavItem divider />
          <NavItem href='#/my_organizations'>  Organizations</NavItem>
          <NavItem divider />
          <NavItem onClick={this.signOut}>Sign Out</NavItem>
        </Navbar>
      );
    } else {
      
      return (
        <Navbar style={navBarStyle} brand='Auxilio' href='#' right className='grey darken-2'>
        </Navbar>      );
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