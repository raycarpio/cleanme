import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Search from './components/Search.js';
import Results from './components/Results';

import './App.css';



class App extends Component {


  render() {
   return (
     <Router>
      <div className="App">
      <NavigationMenu/>
      

        <div className="App-mainContent">
        <Results/>
        <h1>{'Saved Results will go here'}</h1>
      </div>



     <div className="App-sidebar">
     <Search/>
     <h1>{'Search Results will Display here'}</h1>
      </div>

      </div>

    <Route path="/search" component={Search}/>
    <Route path="/results"component={Search}/>

      </Router>
    );
  }
}

export default App;
