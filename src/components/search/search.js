import React, { Component } from 'react';

export default class SearchBox extends Component {
    state = {
      query: '',
    }

    handleInputChange = () => {
      this.setState({
        query: this.search.value
      })
    }

    render() {
      return (
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
      )
    }
   }

