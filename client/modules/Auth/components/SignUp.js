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
      // usernameRef.value = emailRef.value = passwordRef.value = '';
    }
  };

  render() {
    // const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
    <div>

        <div className="text-center">
          <h3>Welcome!</h3>
          <p>Sign up with your email to continue</p>
        </div>
        <form role='form'>
          <div className='form-group'>
            <input type='text'
                   className='form-control input-lg'
                   placeholder='Username' ref="username" required/>
          </div>
          <div className='form-group'>
            <input type='email'
                   className='form-control input-lg'
                   placeholder='Email' ref="email" required/>
          </div>
          <div className='form-group'>
            <input type='password'
                   className='form-control input-lg'
                   placeholder='Password' ref="password" required/>
          </div>
          <button type="submit" className="btn btn-default btn-lg" href="#" onClick={this.signupfunc}><FormattedMessage id="submit" /></button>
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
