'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactIntl = require('react-intl');

var _DropdownButton = require('react-bootstrap/lib/DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Style
// import styles from './Header.css';

function Header(props, context) {
  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
    return _react2.default.createElement(
      'li',
      { key: lang },
      _react2.default.createElement(
        'a',
        { onClick: function onClick() {
            return props.switchLanguage(lang);
          },
          className: lang === props.intl.locale ? 'ttt' : '' },
        lang
      )
    );
  });

  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-default' },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-header' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-brand' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'siteTitle' })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav navbar-right' },
          _react2.default.createElement(
            'li',
            { className: 'dropdown', key: '1' },
            _react2.default.createElement(
              'a',
              { className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true',
                'aria-expanded': 'false' },
              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'switchLanguage' }),
              _react2.default.createElement('span', { className: 'caret' })
            ),
            _react2.default.createElement(
              'ul',
              { className: 'dropdown-menu' },
              languageNodes
            )
          ),
          _react2.default.createElement(
            'li',
            { key: '2' },
            context.router.isActive('/', true) ? _react2.default.createElement(
              'a',
              { href: '#', onClick: props.toggleAddPost },
              _react2.default.createElement(_reactIntl.FormattedMessage, {
                id: 'addPost' })
            ) : null
          ),
          _react2.default.createElement(
            'li',
            { key: '3' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/sign-up' },
              'Sig In / Sign Up'
            )
          )
        )
      )
    )
  );
}

Header.contextTypes = {
  router: _react2.default.PropTypes.object
};

Header.propTypes = {
  toggleAddPost: _react.PropTypes.func.isRequired,
  switchLanguage: _react.PropTypes.func.isRequired,
  intl: _react.PropTypes.object.isRequired
};

var _default = Header;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/home/black/Documents/Mern/React-Test/client/modules/App/components/Header/Header.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/black/Documents/Mern/React-Test/client/modules/App/components/Header/Header.js');
})();

;

//# sourceMappingURL=Header-compiled.js.map