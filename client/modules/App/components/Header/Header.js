import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {FormattedMessage} from 'react-intl';

import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang}><a onClick={() => props.switchLanguage(lang)}
                              className={lang === props.intl.locale ? 'ttt' : ''}>{lang}</a></li>
  );

  return <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <div className="navbar-brand"><Link to="/"><FormattedMessage id="siteTitle"/></Link></div>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown" key="1">
            <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
               aria-expanded="false">{<FormattedMessage id="switchLanguage"/>}<span className="caret"></span></a>
            <ul className="dropdown-menu">
              {languageNodes}
            </ul>
          </li>
          <li key="2">{
            context.router.isActive('/', true)
              ? <a href="#" onClick={props.toggleAddPost}><FormattedMessage
              id="addPost"/></a>
              : null
          }</li>
          <li key="3">
            <Link to="/sign-up">Sig In / Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
