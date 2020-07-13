import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props){
      super(props);

      this.state = {
        title: '',
        img: '',
        content: '',
      
      }
    }
  

    handleInput = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    newPost = () => {
      axios.post(`/api/post`, {title: this.state.title, content: this.state.content, img: this.state.img })
      .then(() =>{ 
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log(err));
    }

  render(){
    // console.log(this.props)
    return(
      <div>
        <input
        name='title'
        value={this.state.title}
        onChange={e => this.handleInput(e)}
        placeholder='Title' />

        <input
        name='img'
        value={this.state.imageUrl}
        onChange={e => this.handleInput(e)}
        placeholder='Image URL' />

        <input
        name='content'
        value={this.state.content}
        onChange={e => this.handleInput(e)}
        placeholder='Type post content here' />

        <button onClick={this.newPost}>Post</button>
      </div>
    )
  }
}



export default Form;