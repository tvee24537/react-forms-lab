import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', password: ''};
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state

    return (
      username !== '' && password !== '' ? 
      this.props.handleLogin(this.state) 
      : 
      alert('Both fields need to be filled out')
    )
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              onChange={e => this.onInputChange(e)}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              onChange={e => this.onInputChange(e)}
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;