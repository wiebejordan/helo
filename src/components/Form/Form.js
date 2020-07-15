import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import '../Form/Form.css';

class Form extends Component {
    constructor(props){
      super(props);

      this.state = {
        title: '',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAElBMVEXy8vL////6+vr19fX4+Pj8/Px/aeudAAACoklEQVR4nO3c227bMBBF0cgk//+XGwu6kRxeRnFaVGevt8a2AG3QQ0kN8vUFAAAAAAAAAAAAAAAAAAAAAACAv2j5Ba9/fVK/hVgOxHL4Prf0+qD08FgfPbfw8Fjpk8cjlgOxHIjlQCwHYjlIxgoh3DqeXqyQbl+Ky8VK551L9B5PLFb40X2eWKyf3RVrxUpFrMU36KVihbKV88pCKtarfjzlWlpSsepWvh1RPZbr3JVi1SPLObSUYlkri1g7ZpZDGau6zGI3PJWxjKHV+3gqv6NSsXxX8KkqoxWrXFq98R7rkaYVq6jVaxWMpScWK6vVPW9rqKnF2r5e71e6G6G5+vRifZ9zjHFwyZDM9acYayx7PHEOeWIZ4pI5ViGxatW16/UFYlUfsy/HiFUx7iC3oxCrZDx73oc8sQrRarUNeWLlrKepx5AnVqbZaq0lHytmd3/tVu8jqccK2VuMjfA65NVjLdf3mBvhKYjHStuaWTU2wkst6Vj71+64MBiTjXV+7cL2dmK1XJdS+W9i5bI2qfoJsYpXy1rDEa8aq7ymitYPibWqr6nWIT+spRjL+sJNbYmCsexR3n5FOpYdYmZL1IvVmkxrif6WKBerPcXHW6JarN7SGW6JYrH6Q2m0JYrF6rYabolasQatRluiVKzJG5rmXFOKNXhyvOpuiUKxJh4rLP0tUSfW3JPj7ddm1GNNtuptiTKxxsN9194SVWLNDPesifUBkVhzw33X2hI1Ys0O911jS9SI5WzVukuUiDU/3A/vj1XrUSHWjVb2/44JxPJshEWYl/GzJzpieYf7ztgSHx/rbitrS3x8rDsDa7MeJ+0UYn2K9i+zOT09Fn8ueNbCH6Ked3+utxGLWMQCAAAAAAAAAAAAAAAAAAAAAAD4//0BUyATTom0AxcAAAAASUVORK5CYII=',
        content: ''
        
      
      }
      this.handleBind=this.handleBind(this);
    }
  

    handleInput = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    newPost = () => {
      if(this.state.title !== '')
      {axios.post(`/api/post`, {title: this.state.title, content: this.state.content, img: this.state.img, author_id: this.props.user.user_id })
      .then(() =>{ 
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log(err));}
      else {alert('enter a title for this post')}
    }

    handleBind(){
      if(this.state.title === 'Bind Baby Bind')
      {alert('I KNOW WHAT BINDING IS BUT I USE ARROW FUNCTIONS')}

    }

  render(){
    console.log(this.props)
    return(
      <div className='form-main'>
        <div className='form-container'>
        <h1 className='form-title'>New Post</h1>

        <h3 className='h3-title'>Title:</h3>
        <input
        name='title'
        value={this.state.title}
        onChange={e => this.handleInput(e)}
         />

        <img src={this.state.img} alt={this.state.title}/>

        <h3 className='h3-image-url'>Image URL:</h3>
        <input
        name='img'
        value={this.state.imageUrl}
        onChange={e => this.handleInput(e)}
         />

        <h3 className='h3-content'> Content:</h3>
        <textarea
        className='form-content'
        name='content'
        value={this.state.content}
        onChange={e => this.handleInput(e)}
         />

        <button onClick={this.newPost}>Post</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Form);