import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer'

class Nav extends Component {

  

  render(){
    console.log(this.props)
    return(
      <div>
       <Link to='/dashboard'>Home</Link>
       <Link to='./post/:postid'>New Post</Link>
       <Link to='/'>Logout></Link>

       <p>{this.props.user.username}</p>
       <img src={this.props.user.profile_picture}
        alt={this.props.user.username}/>
      </div>
    )
  }
}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);