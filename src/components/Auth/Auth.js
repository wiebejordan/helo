import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';
import '../Auth/Auth.css';

class Auth extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      picture: 'https://i.cdn.turner.com/adultswim/big/video/decker-unsealed-heroes-united/promo_DeckerActionTrailer70_Dated_3523T.jpg'
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
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log(err))
    } else {
      alert('enter password');
    }
  }

  handleLogin = () => {
    const {username, password} = this.state;
    
    axios.post('/auth/login', {username, password})
    .then(res => {
      this.props.getUser(res.data);
      this.props.history.push('/dashboard');
    })
    .catch(err => console.log(err))
    
  }

  render(){
    console.log(this.props)
    return(
      <div className='auth-main'>
      <div className='auth-box'>
        <h1>:)</h1>
        <h1>Helo</h1>
        <div className='auth-input'>
        Username: <input 
            name='username'
            value={this.state.username}
            onChange={e => this.handleInput(e)}
            placeholder='enter username'
        />
        </div>
        <div className='auth-input'>
        Password: <input
            name='password'
            value={this.state.password}
            onChange={e => this.handleInput(e)}
            placeholder='enter password'
        /> 
        </div> 
        <div className='auth-box-buttons'>
        <button onClick={this.handleLogin}>Login</button>

        <button onClick={this.handleRegister}>Register</button>
        </div>
      </div>
      </div>
    )
  }
}



export default connect(null, {getUser})(Auth);