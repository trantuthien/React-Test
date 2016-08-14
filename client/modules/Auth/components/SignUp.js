/**
 * Created by thientran on 8/13/16.
 */
import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';


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
    }
  };

  render() {
    // const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
    <div>
        <div className="text-center">
          <h3>Sign up for free!</h3>
          <p>Get up and running with Everything in minutes.</p>
        </div>
        <form role='form' >
          <div className='form-group'>
            <input type='text'
                   className='form-control input-lg'
                   value='bachyeutan'
                   placeholder='Username' ref="username" required/>
          </div>
          <div className='form-group'>
            <input type='email'
                   value='bachtt@topica.edu.vn'
                   className='form-control input-lg'
                   placeholder='Email' ref="email" required/>
          </div>
          <div className='form-group'>
            <input type='password'
                   value='fucktan'
                   className='form-control input-lg'
                   placeholder='Password' ref="password" required/>
          </div>
          <a type='submit' onClick={this.signupfunc}
                  className='btn btn-default btn-lg'>
                  <FormattedMessage id="submit" />
          </a>
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
