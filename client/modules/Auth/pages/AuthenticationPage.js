/**
 * Created by thientran on 8/13/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
// Import Components
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
// Import Actions style
import styles from './Auth.css';
// Import Actions
import {signUpRequest, signInRequest} from '../AuthActions';
// Import Selector
import {checkSuccess, checkSigninSuccess} from '../AuthReducer';

class AuthenticationPage extends Component {
  // Truyen ham handleSignUp vao Component SignUp
  handleSignUp = (userinfo) => {
    this.props.dispatch(signUpRequest(userinfo));
  };
  // Truyen ham handleSignIn vao Component SignIn
  handleSignIn = (usersignin) => {
    this.props.dispatch(signInRequest(usersignin));
  };


  render() {
    var {userinfo, reduxState, usersignin} = this.props;     // Khai bao bien userinfo va reduxSate de xem du lieu tra ve
    const cls = `${styles.form} ${((userinfo==11) ? styles.appear : '' )}`; // Neu userinfo =11 thi them class appear o trong file Auth.css
    const cll = `${styles.form} ${((userinfo==12) ? styles.appear : '' )}`; // Neu userinfo =12 thi them class appear o trong file Auth.css

    const fuck = `${styles.form} ${((usersignin==14) ? styles.appear : '' )}`; // Neu userinfo =11 thi them class appear o trong file Auth.css
    const tan = `${styles.form} ${((usersignin==15) ? styles.appear : '' )}`; // Neu userinfo =12 thi them class appear o trong file Auth.css
    if(usersignin == 14){
      this.context.router.push('/');
    }
    return (
      <div>
        <Helmet title="Sign Up & In"/>
        <div className='col-xs-12 col-md-4 col-md-offset-4'>
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab"
                                                          data-toggle="tab">Sign In</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Sign Up</a>
            </li>
          </ul>
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="home">
              <SignIn signinfunc={this.handleSignIn} intl={this.intl}/>
              <div className={fuck}>Sign In Success</div>
              <div className={tan}>User Not Exits</div>
              <pre>
              redux state = { JSON.stringify(reduxState, null, 2) }
              </pre>
            </div>
            <div role="tabpanel" className="tab-pane" id="profile">
              <SignUp signupfunc={this.handleSignUp} intl={this.intl}/>
              <div className={cls}>Sign Up Success</div>
              <div className={cll}>User Exits</div>
              {/*<div>Thong Tin lon: {JSON.stringify(userinfo, null, 2)}</div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
    userinfo: checkSuccess(store),
    usersignin: checkSigninSuccess(store),
    reduxState: store,
  };
}

AuthenticationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

AuthenticationPage.contextTypes = {
  router: React.PropTypes.object,
  userinfo: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
  }),
  usersignin: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(AuthenticationPage);
