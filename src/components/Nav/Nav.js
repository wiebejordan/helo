import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {

  

  render(){
    return(
      <div>
       <Link to='/dashboard'><p>Home</p></Link>
       <Link to='./post/:postid'><p>New Post</p></Link>
       <Link to='/'><p>Logout</p></Link>
      </div>
    )
  }
}

export default Nav;