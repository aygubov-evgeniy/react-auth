import React, {Component} from 'react'
import {connect} from 'react-redux'

class Account extends Component {
  render() {
    const {username, name} = this.props.user

    return (
      <div className="account">
        <div>Username: {username}</div>
        <div>Name: {name}</div>
      </div>
    )
  }
}

export default connect((state) => state)(Account)
