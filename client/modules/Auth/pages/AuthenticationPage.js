/**
 * Created by thientran on 8/13/16.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

// Import Components
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

// Import Actions
import {signUpRequest} from '../AuthActions';

class AuthenticationPage extends Component {

  // handleDeletePost = post => {
  //   if (confirm('Do you want to delete this post')) { // eslint-disable-line
  //     this.props.dispatch(deletePostRequest(post));
  //   }
  // };

  handleSignUp = (userinfo) => {
    this.props.dispatch(signUpRequest(userinfo));
  };

  render() {
    return (
      <div>
        <Helmet title="Sign Up & In"/>
        <div className='col-xs-12 col-md-4 col-md-offset-4'>
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab"
                                                          data-toggle="tab">Sign Up</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Sign In</a>
            </li>
          </ul>
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="home">
              <SignUp signupfunc={this.handleSignUp} intl={this.intl}/>
            </div>
            <div role="tabpanel" className="tab-pane" id="profile">
              <SignIn signinfunc={this.handleSignUp} intl={this.intl}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

AuthenticationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

AuthenticationPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(AuthenticationPage);
