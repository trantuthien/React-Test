'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactHotLoader = require('react-hot-loader');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize store
var store = (0, _store.configureStore)(window.__INITIAL_STATE__); /**
                                                                   * Client entry point
                                                                   */

var mountApp = document.getElementById('root');

(0, _reactDom.render)(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(_App2.default, { store: store })
), mountApp);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', function () {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    var NextApp = require('./App').default; // eslint-disable-line global-require
    (0, _reactDom.render)(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(NextApp, { store: store })
    ), mountApp);
  });
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(store, 'store', '/Users/thientran/Downloads/mern_v2/client/index.js');

  __REACT_HOT_LOADER__.register(mountApp, 'mountApp', '/Users/thientran/Downloads/mern_v2/client/index.js');
})();

;

//# sourceMappingURL=index-compiled.js.map