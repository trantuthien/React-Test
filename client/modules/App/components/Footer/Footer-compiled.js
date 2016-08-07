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

var _headerBk = require('../../header-bk.png');

var _headerBk2 = _interopRequireDefault(_headerBk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Style
function Footer() {
  return _react2.default.createElement(
    'div',
    { className: _Footer2.default.footer },
    _react2.default.createElement(
      'p',
      { className: 'text-center' },
      'The Musteker Team'
    )
  );
}

// Import Images
var _default = Footer;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/Users/thientran/Downloads/mern_v2/client/modules/App/components/Footer/Footer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/thientran/Downloads/mern_v2/client/modules/App/components/Footer/Footer.js');
})();

;

//# sourceMappingURL=Footer-compiled.js.map