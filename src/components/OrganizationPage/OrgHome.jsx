import React, { Component } from 'react';
import { getOrgPosts } from '../../apis/auxilioServerApi';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const DisplayPosts = (props) => {

  if (props.posts && props.posts.length > 0){
    return (
      <div>
        <h2>Recent Posts</h2>
        {props.posts.map((post)=>
          <div key={post.uid}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
          )}
      </div>
    );
  } else {
    return <div>Loading...</div>
  }
}

export class OrgHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      postList: null
    };
    this.updatePostsList = this.updatePostsList.bind(this)
  }

  componentDidMount() {
    this.initialTimeout = setTimeout(()=>this.updatePostsList(), 500);
    this.updateTimer = setInterval(()=>this.updatePostsList(), 8000);
  }  

  componentWillUnmount(){
    clearInterval(this.updateTimer);
  }
  
  updatePostsList(){
    getOrgPosts(this.props.currentUser.uid, this.props.org_uid).then((orgPosts)=>{
      console.log('orgPosts', orgPosts)
      this.setState( {...this.state, postList: orgPosts[0]})
    });
    console.log('state', this.state)
  }


  render() {
    if (this.props.currentUser.uid){
      return (
        <div>
          <DisplayPosts posts={this.state.postList} />
        </div>
      )
    } else {
      return (
        <Redirect to='/'/>
        )
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userAuthData,
    org_uid: state.orgs.currentOrgUid
  }
}

export default connect(mapStateToProps)(OrgHome);
