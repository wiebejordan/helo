import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';

class Auth extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      picture: ''
    }
  }


  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleRegister = () => {
    const {username, password, picture} = this.state;
    if(password){
      axios.post('/auth/register', {username, password, profilePicture: picture})
      .then(res => {
        this.props.getUser(res.data);
        this.history.push('/dashboard');
      })
      .catch(err => console.log(err))
    } else {
      alert('incorrect password');
    }
  }

  handleLogin = () => {
    const {username, password} = this.state;
    axios.post('/auth/login', {username, password})
    .then(res => {
      this.props.getUser(res.data);
      this.props.history.push('/dashboard');
    })
    .catch(err => console.log(err));
  }

  render(){
    // console.log(this.props)
    return(
      <div>
        <input
            name='username'
            value={this.state.username}
            onChange={e => this.handleInput(e)}
            placeholder='enter username'
        />

        <input
            name='password'
            value={this.state.password}
            onChange={e => this.handleInput(e)}
            placeholder='enter password'
        />  

        <button onClick={this.handleLogin}>Login</button>

        <button onClick={this.handleRegister}>Register</button>
      </div>
    )
  }
}



export default connect(null, {getUser})(Auth);