import React, {Component} from 'react';

import './App.css';
import Nav from './components/Nav/Nav';

import routes from './routes';


class App extends Component{
    constructor(props){
      super(props);

      this.state = {
        navView: true
      }
    }


 
  
  render(){
    console.log(this.props)
    return(
      <div className='main'>
        <Nav />
        
        {routes}
      </div>
    )
  }

}

export default App;
