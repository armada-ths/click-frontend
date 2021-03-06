import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { auth } from '../../auth';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      passwordError: false
    }
  }

  handleUserChange(event) {
    this.setState({username: event.target.value});
  }

  handlePassChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    const username = this.state.username;
    const password = this.state.password;
    auth(username, password, () => {
      browserHistory.push('/');
    }, () => {
      console.log('Error opening websocket');
      this.setState({passwordError: true})
    });
  }

  render() {
    return (
      <div className="login">
        <div> 
            <h1>click</h1>
            {this.state.passwordError ? (<div className="error-bar"><p>Wrong Username or Password</p></div>) : 
            (<p class="login-info">Get your login info from your Team Leader</p>)}
            <input placeholder="User" value={this.state.username} onChange={this.handleUserChange} />
            <input placeholder="Pass" value={this.state.password} onChange={this.handlePassChange} type="password" />

            <div className="button-container" onClick={this.handleSubmit}>
              <button>Login</button>
            </div>
        
          </div>
        </div>
    );
  }
}

export default Login;
