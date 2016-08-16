'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = Footer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _Footer = require('./Footer.css');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Images

function Footer() {
  return _react2.default.createElement(
    'div',
    { className: _Footer2.default.footer },
    _react2.default.createElement(
      'p',
      { className: 'text-center' },
      'The Musketeer Team'
    )
  );
}

// Import Style
var _default = Footer;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/home/black/Documents/Mern/React-Test/client/modules/App/components/Footer/Footer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/black/Documents/Mern/React-Test/client/modules/App/components/Footer/Footer.js');
})();

;

//# sourceMappingURL=Footer-compiled.js.map