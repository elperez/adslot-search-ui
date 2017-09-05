import React, { Component } from 'react'


class Site extends Component {

  render() {
    return <div>
      <a>{this.props.siteUrl} </a>
      <p>{this.props.description}</p>
    </div>
  }
}

export default Site
