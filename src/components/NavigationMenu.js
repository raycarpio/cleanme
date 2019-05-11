import React, { Component } from 'react'

export class NavigationMenu extends Component {

    state = {
        page: '',
      }
    
      onWelcomeClick = () => {
        this.setState({
          page: 'welcome',
        });
      }
    
      onAboutClick = () => {
        this.setState({
          page: 'about',
        });
      }
    
      onSearchClick = () => {
        this.setState({
          page: 'search',
        });
      }
    
      onResultsClick = () => {
        this.setState({
          page: 'results',
        });
      }




  render() {
    return (
        <div className="App-navigation">
        <h1 className="App-title">List</h1>
        <a onClick={this.onWelcomeClick}>Welcome</a>
        <a onClick={this.onAboutClick}>About</a>
        <a onClick={this.onBlogClick}>Search</a>
        <a onClick={this.onContributeClick}>Results</a>
      </div>

        







    )
  }
}

export default NavigationMenu

