import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../Dashboard/Dashboard.css'

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
    
    
  }

  getPosts = () => {

    axios.get(`/api/posts`)
    .then(res => this.setState({posts: res.data}))
    .catch(err => console.log(err));
    
  }

  handleInput = (val) => {
      this.setState({search: val})
  }

  handleToggle =() => {
    this.setState({userPosts: !this.state.userPosts})
    console.log(this.state.userPosts)
  }

  render(){
    const mappedPosts = this.state.posts.map((post, i) => (
          
          <Link to={`/post/${post.post_id}`}>
          <div key={i} className='post-box'>
            <p>{post.title}</p>
            <p>{post.username}</p>
            <img src={post.profile_picture} alt={post.username} />
          </div>
          </Link>
          
          
    ))
    return(
      <div className='dash-main'>
        <div className='dash-searchbar'>
          <div>
        <input 
        name = 'search'
        value = {this.state.search}
        placeholder = 'search'
        onChange= {(e) => this.handleInput(e.target.value)}/>

        <button>Search</button>
        <button>Reset</button>
        </div>
        
        <div className='searchbar-checkbox'>
        My Posts:<input
        type='checkbox'
        onClick={this.handleToggle}
        />
        </div>

        {mappedPosts}
        </div>
      </div>
    )
  }
}



export default Dashboard;