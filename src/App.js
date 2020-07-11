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
    return(
      <div>
        <Nav/>
        
        {routes}
      </div>
    )
  }

}

export default App;
