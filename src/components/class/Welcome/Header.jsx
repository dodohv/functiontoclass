import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <p>Bem vindo, {this.props.username}!</p>
    )
  }
}
