/**
 * Created by thientran on 8/13/16.
 */
import React, {Component, PropTypes} from 'react';
import {injectIntl, intlShape, FormattedMessage} from 'react-intl';

export class SignIn extends Component {
  signinfunc = (e) => {
    e.preventDefault();
    const emailRef = this.refs.email;
    const passwordRef = this.refs.password;
    if (emailRef.value && passwordRef.value) {
      var userinfo_data = {
        password: passwordRef.value,
        email: emailRef.value,
      };
      this.props.signinfunc(userinfo_data);
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
        <form role='form' onSubmit={this.signinfunc}>
          <div className='form-group'>
            <input
              ref='email'
              type='email'
              value='bachtonthat@gmail.com'
              className='form-control input-lg'
              placeholder='Email' required/>
          </div>
          <div className='form-group'>
            <input
              ref='password'
              type='password'
              value='dinhmenh'
              className='form-control input-lg'
              placeholder='Password' required/>
          </div>
          <button
            type='submit'
            className='btn btn-primary btn-lg'>
            <FormattedMessage id="submit"/>
          </button>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  signinfunc: PropTypes.func,
  intl: intlShape.isRequired,
};

export default injectIntl(SignIn);
