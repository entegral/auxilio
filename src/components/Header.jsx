import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { Icon, Button, SideNav, SideNavItem } from 'react-materialize';
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
    
    const bannerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#505050',
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

    if (this.props.userData.uid){
      return (
        <div style={bannerStyle}>
            <h2 style={headerStyle} > <a style={headerAnchorStyle} href="/">Auxilio</a> </h2>


            <div>
              <SideNav 
                trigger={<Button style = {linkStyle} className='btn-flat transparent'><Icon>menu</Icon></Button>}
                options={{ closeOnClick: true }} >
                <SideNavItem icon='account_box' href='#!' ><Link to='/profile'> {this.props.userAuthData.email}</Link> </SideNavItem>
                <SideNavItem divider />
                <SideNavItem href='#!'> <Link to='/organizations'> Organizations</Link></SideNavItem>
                <SideNavItem waves href='#!'><Link to='/departments'>Departments</Link></SideNavItem>
                <SideNavItem waves href='#!'><Link to='/jobs'>Jobs</Link></SideNavItem>
              </SideNav>
              <Button style={linkStyle} className='btn-flat transparent grey-text text-lighten-1' waves='light' onClick={this.signOut} href='/#/'> Logout </Button>
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
            <Button style={linkStyle} className='btn-flat transparent grey-text text-lighten-1' waves='light' node='a' href='/#/'> Login </Button>
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