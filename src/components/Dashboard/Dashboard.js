import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
      super(props);

      this.state = {
        search: '',
        userPosts: true,
        posts: []
      }
    }

  componentDidMount = () => {
    this.getPosts();
    console.log(this.state.posts)
  }

  getPosts = () => {
    axios.get(`/api/posts/${this.props.user.user_id}`)
    .then(res => this.setState({posts: res.data}))
    .catch(err => console.log(err));
  }

  handleInput = (val) => {
      this.setState({search: val})
  }

  render(){
    const mappedPosts = this.state.posts.map((post, i) => (
          <div className='post-box'>
            <p>{post.title}</p>
            <p>{}</p>
          </div>
          
    ))
    return(
      <div>
        <input 
        name = 'search'
        value = {this.state.search}
        placeholder = 'search'
        onChange= {(e) => this.handleInput(e.target.value)}/>

        <button>Search</button>
        <button>Reset</button>
        My Posts:<input
        type='checkbox'
        />

        {mappedPosts}
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);