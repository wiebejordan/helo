import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser, clearUser} from '../../ducks/reducer';
import axios from 'axios';
import '../Nav/Nav.css';

class Nav extends Component {

  componentDidMount = () => [
    this.keepUser()
  ]
  
  keepUser = () => {
      axios.get('/api/auth/me')
      .then(res => {
        this.props.getUser(res.data[0])
      })
      .catch(err => console.log(err))
  }

  logout = () => {
    axios.post('/auth/logout')
    .then(() => {
      this.props.clearUser();
      this.props.history.push('/');
    })
    .catch(err => console.log(err))
  }

  render(){
    // console.log(this.props.location.pathname)
    return(
      <div>
      {this.props.location.pathname !== '/'
      ?( 
      <div className='nav'>
          <div className='nav-upper'>
            <img src={this.props.user.profile_picture}
            alt={this.props.user.username}/>
          <p>{this.props.user.username}</p>
          <Link to='/dashboard'><nav>Home</nav></Link>
          <Link to='/new'><nav>New Post</nav></Link>
          </div>

          <div className='nav-lower'>
            <Link to='/' onClick={this.logout}><nav>Logout</nav></Link>
        </div>
       
      </div>
       )
      :null}

      </div>
    )
  }
}
const mapStateToProps = reduxState => reduxState;

export default withRouter(connect(mapStateToProps, {getUser, clearUser} )(Nav));