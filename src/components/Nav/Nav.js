import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../Nav/Nav.css';

class Nav extends Component {

  

  render(){
    console.log(this.props)
    return(
      
      <div className='nav'>
       <img src={this.props.user.profile_picture}
        alt={this.props.user.username}/>
       <p>{this.props.user.username}</p>
       <Link to='/dashboard'>Home</Link>
       <Link to='/new'>New Post</Link>
       <Link to='/'>Logout</Link>

      </div>
    )
  }
}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);