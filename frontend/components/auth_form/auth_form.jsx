import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {

  constructor(props) {
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

  alternateFormLink() {
    if (this.props.formType === 'signin') {
      return (<p className='auth-footer'>Don't have an account yet? <Link to='/signup'>Sign up! </Link>
    Or <Link
      onClick={() => this.props.guestLogin().then(() => this.redirect())}>log in as guest.</Link></p>);
    } else {
      return (<p className='auth-footer'>Already have an account? <Link to='/signin'>Click here to sign in.</Link></p>);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.props.clearErrors();
      this.setState({ username: "", password: "" });
    }
  }

  instruction() {
    if (this.props.formType === 'signin') {
      return (
        <div>
          <h1>Sign in to Remiss</h1>
          <p>Enter your <strong>username</strong> and <strong>password.</strong></p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Sign up for Remiss</h1>
          <p>Choose a username and password.</p>
        </div>
        );
    }
  }

  errorsList() {
    if (this.props.errors.length > 0) {
      return (
        <div className='card errors-card'>
          <ul>
            { this.props.errors.map( (err, idx) => <li key={`err-${idx}`}>{err}</li> )}
          </ul>
        </div>
      );
    } else {
      return undefined;
    }
  }

  guestLoginLink() {
    if (this.props.formType === 'signup' ) {
      return (
        <p>Or try a <Link
          onClick={() => this.props.guestLogin().then(() => this.redirect())}>guest account
        </Link></p>
      );
    } else {
      return <p> </p>;
    }
  }

  render() {
    const { username, password } = this.state;

    return (
        <div className='card-container'>
          { this.errorsList.bind(this)() }
          <div className='card content-card'>
            { this.instruction.bind(this)() }
            <form onSubmit={ this.handleSubmit.bind(this) }>
              <input type='text' value={username} onChange={ this.update('username') } placeholder="username" />
              <input type='password' value={password} onChange={ this.update('password') } placeholder="password"/>
              <input type='submit' value={this.props.formType === 'signup' ? "Create Account" : "Sign in"} />
              { this.guestLoginLink.bind(this)() }
            </form>
          </div>
          { this.alternateFormLink.bind(this)() }
        </div>
    );
  }
}

export default AuthForm;
