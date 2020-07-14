import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
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
    if(!this.props.user.user_id){
      this.props.history.push('/');
    } 
    else {this.getPosts();}
    
    
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

  handleClear = () => {
    this.setState({search: ''})
  }

  render(){
    console.log(this.props);
    const mappedPosts = this.state.posts.map((post, i) => (
          
          <div key={i} className='post-box' >
          <Link to={`/post/${post.post_id}`}>
            <p className='title'>{post.title}</p>
          </Link>
              <div className='post-author'>
              <p >{post.username}</p>
              <img src={post.profile_picture} alt={post.username} />
              </div>
          </div>
          
          
          
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
        <button onClick={this.handleClear}>Reset</button>
        </div>

        <div className='searchbar-checkbox'>
        My Posts:<input
        type='checkbox'
        defaultChecked={this.state.userPosts}
        onClick={this.handleToggle}
        />
        </div>

        </div>
        <div className='post-container'>
        {mappedPosts}
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);