import React, { Component } from 'react';
import Header from './components/Header';
import UsersList from './components/UsersList';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    isLoading: false,
    errorMsg: ''
  }

  render() {
    const {users, isLoading, errorMsg} = this.state;
    console.log(users);
    return (
      <div className="main-section">
        <Header />
        {isLoading && <p className="loading">Loading...</p>}
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <UsersList users={users} />
      </div>
    )
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get('https://randomuser.me/api/?page=0&results=20')
    .then((response) => {
      this.setState({users: response.data.results, errorMsg: ''})
    })
    .catch((error) => {
      this.setState({
        errorMsg: 'Intentelo mas tarde.'
      })
    })
    .finally(() => {
      this.setState({
        isLoading: false
      })
    })
  }
}

export default App;
