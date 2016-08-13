/**
 * Created by thientran on 8/13/16.
 */

import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
// import styles from './Auth.css';

export class SignUp extends Component {
  signupfunc = () => {
    const usernameRef = this.refs.username;
    const emailRef = this.refs.email;
    const passwordRef = this.refs.password;
    if (usernameRef.value && emailRef.value && passwordRef.value) {
      var userinfo_data = {
        username: usernameRef.value,
        password: passwordRef.value,
        email: emailRef.value,
      };
      this.props.signupfunc(userinfo_data);
      usernameRef.value = emailRef.value = passwordRef.value = '';
    }
  };

  render() {
    // const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
    <div>

        <div className="text-center">
          <h3>Welcome back!</h3>
          <p>Sign in with your email to continue</p>
        </div>
        <form role='form'>
          <div className='form-group'>
            <input type='text'
                   className='form-control input-lg'
                   placeholder='Username' ref="username" />
          </div>
          <div className='form-group'>
            <input type='text'
                   className='form-control input-lg'
                   placeholder='Email' ref="email" />
          </div>
          <div className='form-group'>
            <input type='password'
                   className='form-control input-lg'
                   placeholder='Password' ref="password"/>
          </div>
          <button type='submit' className='btn btn-lg' onClick={this.signupfunc}>Submit</button>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  signupfunc: PropTypes.func,
  intl: intlShape.isRequired,
};

export default injectIntl(SignUp);
