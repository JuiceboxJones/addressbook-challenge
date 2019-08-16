import React, { Component } from 'react';

const UserContext = React.createContext({
  error: '',
  users: {},
  nats: null,
  page: null,
  setError: () => {},
  setUser: () => {},
  setNats: () => {},
  setPage: () => {}
})

export default UserContext

export class UserProvider extends Component {
  constructor(props) {
    super(props)
    const state = {
      error: '',
      users: {},
      nats: null,
      page: null,
    }
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  setUsers = users => {
    this.setState({ ...this.state.users, users })
  }

  setNats = nats => {
    this.setState({ nats })
  }

  setPage = page => {
    this.setState({ page })
  }

  render () {
    const value = {
      error: this.state.error,
      users: this.state.user,
      nats: this.state.nats,
      page: this.state.page,
    }

    return(
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}