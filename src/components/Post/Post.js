import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../Post/Post.css';

class Post extends Component {
    constructor(props){
      super(props);

      this.state = {
          title: '',
          image: '',
          content: '',
          username: '',
          profilePicture: ''
      }
    }

    componentWillMount = () => {
      if(this.props.match.params.postid){
        axios.get(`/api/post/${this.props.match.params.postid}`)
      .then(res => {
        this.setState({title: res.data[0].title, image: res.data[0].img, content: res.data[0].content,
        username: res.data[0].username, profilePicture: res.data[0].profile_picture})
        console.log(this.props.match.params)
      })
      .catch(err => console.log(err));
    
      }
      
    }

    deletePost = (id => {
      axios.delete(`/api/post/${id}`)
      .then(() => {
        this.history.push('/dashboard');
      })
      .catch(err => console.log(err));
    })

    
    

  render(){
    
    return(
      <div className='post-main'>
        <div className='post-holder'>
          <div className='post-header'>
            <header>{this.state.title}</header>
            <div className='author-info'>
              <p>{this.state.username}</p>
              <img src={this.state.profilePicture} alt={this.state.username} className='username-img'/>
            </div> 
          </div>
       <img className='post-image' src={this.state.image} alt={this.state.title} />
       <div className='post-content-box'>
       <p className='post-content'>{this.state.content}</p>
       </div>
        {this.props.user.username === this.state.username
        ?(<button onClick={() => this.deletePost(this.props.match.params.postid)}>Delete Post</button>)
        :null}
       </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Post);