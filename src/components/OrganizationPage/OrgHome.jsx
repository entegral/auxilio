import React, { Component } from 'react';
import { getOrgPosts } from '../../apis/auxilioServerApi';
import { connect } from 'react-redux'

const DisplayPosts = (props) => {
  return (
    <div>
      <h2>Recent Posts</h2>
      {props.posts.map((post)=>
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
        )}
    </div>
  );
}

export class OrgHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      org_uid: this.props.org_uid,
      postList: []
    };


    window.onload = (() => { 
      this.updateTimer = setInterval(this.updatePostsList(), 60000);
    });
  }  

  componentWillUnmount(){
    clearInterval(this.updateTimer);
  }
  
  updatePostsList(){
    getOrgPosts(this.props.currentUser, this.org_uid).then((orgPosts)=>{
      this.setState( {...this.state, postList: orgPosts})
    })
  }


  render() {
    return (
      <div>
        <DisplayPosts posts={this.state.postList} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userAuthData,

  }
}

export default connect(mapStateToProps)(OrgHome);
