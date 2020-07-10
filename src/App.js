import React, {Component} from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Post from './components/Post/Post';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';

class App extends Component{
  
  render(){
    return(
      <div>
        <Nav/>
        <Auth/>
        <Dashboard/>
        <Form/>
        <Post/>
      </div>
    )
  }
}

export default App;
