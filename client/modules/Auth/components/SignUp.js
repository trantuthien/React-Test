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
                   value="lsdkjflskf"
                   placeholder='Username' ref="username" />
          </div>
          <div className='form-group'>
            <input type='text'
                   className='form-control input-lg'
                   value="alfjslk"
                   placeholder='Email' ref="email" />
          </div>
          <div className='form-group'>
            <input type='password'
                   value="ldsjslk"
                   className='form-control input-lg'
                   placeholder='Password' ref="password"/>
          </div>
          <a className="btn btn-lg" href="#" onClick={this.signupfunc}><FormattedMessage id="submit" /></a>
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
