import React from 'react';

class AuthForm extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = { username: "", password: "" };
  }

  update(attribute) {
    return e => this.setState({ [attribute]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.redirect());
  }

  redirect() {
    this.props.router.push('/messages');
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <ul>
          { this.props.errors }
        </ul>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input value={username} onChange={ this.update('username') } />
          <input type='password' value={password} onChange={ this.update('password') } />
          <input type='submit' value="Submit" />
        </form>
      </div>
    );
  }
}

export default AuthForm;
