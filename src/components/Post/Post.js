import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

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

    

  render(){
    return(
      <div>
          <div className='post-header'>
            <header>{this.state.title}</header> 
            <p>{this.state.username}</p>
            <img src={this.state.profilePicture} alt={this.state.username}></img>
          </div>
       <img src={this.state.image} alt={this.state.title} />
       <p>{this.state.content}</p>
       
       
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Post);