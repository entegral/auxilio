import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileInfoDisplay from './ProfileInfoDisplay';
import ProfileOrgDisplay from './ProfileOrgDisplay';
import ProfileJobDisplay from './ProfileJobDisplay';
import { listStyleParent } from '../helpers/jsStyleObjects';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    
  }

  render() {

    const { uid } = this.props.userData; 
    console.log('userID', uid)
    if (uid) {
      return (
        <React.Fragment>
          <div style={listStyleParent}>
            <ProfileInfoDisplay/>
  
            <ProfileOrgDisplay/>
            
            <ProfileJobDisplay/>
            
          </div>
        </React.Fragment>
      );
    } else {
      return(
        <Redirect to='/' />
      )
    }

  }

}

const mapStateToProps = state => {
  return {
    userAuthData: state.userAuthData,
    userData: state.userData
  }
}

export default connect (mapStateToProps)(Profile);