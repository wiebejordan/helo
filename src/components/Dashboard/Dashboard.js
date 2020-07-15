import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import axios from 'axios';
import '../Dashboard/Dashboard.css'

class Dashboard extends Component {
    constructor(props){
      super(props);

      this.state = {
        search: ``,
        searchVal: ``,
        userPosts: true,
        posts: []
      }
    }

  componentDidMount = () => {
    this.getPosts();
    
  }

  componentDidUpdate = (prevProps, prevState) => {
      if(prevState.search !== this.state.search){
        this.getPosts();
      }
  }
    

  getPosts = () => {

    axios.get(`/api/posts?title=${this.state.search}`)
      
    .then(res => this.setState({posts: res.data}))
    .catch(err => console.log(err));
    
  }

  handleInput = (val) => {
      this.setState({searchVal: val});
      
  }

  handleToggle =() => {
    this.setState({userPosts: !this.state.userPosts})
    // console.log(this.state.userPosts)
  }

  handleSearch = () => {
    this.setState({search: this.state.searchVal})
  }

  handleClear = () => {
    this.setState({search: '', searchVal: ''})
  }

  render(){
    console.log(this.props);
    const mappedPosts = this.state.posts.map((post, i) => (
          
          <Link to={`/post/${post.post_id}`}>
          <div key={i} className='post-box' >
            <p className='post-box-title'>{post.title}</p>
              <div className='post-author'>
              <p className='post-box-author' >{post.username}</p>
              <img src={post.profile_picture} alt={post.username} />
              </div>
          </div>
          </Link>
          
          
          
    ))
    return(
      
      <div className='dash-main'>
        <div className='dash-searchbar'>
          <div>
        <input 
        name = 'searchVal'
        value = {this.state.searchVal}
        placeholder = 'search by title'
        onChange= {(e) => this.handleInput(e.target.value)}/>

        <button onClick={this.handleSearch}>Search</button>
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