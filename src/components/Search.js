import React, { Component } from 'react'


class Search extends Component {
    onBlogClick = () => {
        this.setState({
          page: 'Search',
        });
      }
    
  render() {
    return (
      <div>
           <a onClick={this.onAboutClick}>Search</a>
           <h1>{'Place search feature here '} </h1>
      </div>
    )
  }
}

export default Search
