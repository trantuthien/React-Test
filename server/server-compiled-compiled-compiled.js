'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _IntlWrapper = require('../client/modules/Intl/IntlWrapper');

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = require('../webpack.config.dev');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _store = require('../client/store');

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = require('../client/routes');

var _routes2 = _interopRequireDefault(_routes);

var _fetchData = require('./util/fetchData');

var _post = require('./routes/post.routes');

var _post2 = _interopRequireDefault(_post);

var _userinfo = require('./routes/userinfo.routes');

var _userinfo2 = _interopRequireDefault(_userinfo);

var _dummyData = require('./dummyData');

var _dummyData2 = _interopRequireDefault(_dummyData);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Initialize the Express App


// Webpack Requirements
var app = new _express2.default();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
  app.use((0, _webpackHotMiddleware2.default)(compiler));
}

// React And Redux Setup


// Import required modules


// Set native promises as mongoose promise
_mongoose2.default.Promise = global.Promise;

// MongoDB Connection
_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  (0, _dummyData2.default)();
});

// Apply body Parser and server public assets and routes
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({ limit: '20mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
app.use('/api', _post2.default);
app.use('/api/auth', _userinfo2.default);

// Render Initial HTML
var renderFullPage = function renderFullPage(html, initialState) {
  var head = _reactHelmet2.default.rewind();

  // Import Manifests
  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
};

var renderError = function renderError(err) {
  var softTab = '&#32;&#32;&#32;&#32;';
  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
  return renderFullPage('Server Error' + errTrace, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use(function (req, res, next) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    var store = (0, _store.configureStore)();

    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
      var initialView = (0, _server.renderToString)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_IntlWrapper2.default, null, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
      var finalState = store.getState();

      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
    }).catch(function (error) {
      return next(error);
    });
  });
});

// start app
app.listen(_config2.default.port, function (error) {
  if (!error) {
    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
  }
});

var _default = app;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/thientran/Documents/SourceTree/React-Test/server/server.js');

  __REACT_HOT_LOADER__.register(renderFullPage, 'renderFullPage', '/Users/thientran/Documents/SourceTree/React-Test/server/server.js');

  __REACT_HOT_LOADER__.register(renderError, 'renderError', '/Users/thientran/Documents/SourceTree/React-Test/server/server.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/thientran/Documents/SourceTree/React-Test/server/server.js');
})();

;

//# sourceMappingURL=server-compiled.js.map

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_express2, '_express2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_compression2, '_compression2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_mongoose2, '_mongoose2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_bodyParser2, '_bodyParser2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_path2, '_path2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_IntlWrapper2, '_IntlWrapper2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_webpack2, '_webpack2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_webpackConfig2, '_webpackConfig2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_webpackDevMiddleware2, '_webpackDevMiddleware2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_webpackHotMiddleware2, '_webpackHotMiddleware2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_react2, '_react2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_reactHelmet2, '_reactHelmet2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_routes2, '_routes2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_post2, '_post2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_userinfo2, '_userinfo2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_dummyData2, '_dummyData2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_config2, '_config2', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(compiler, 'compiler', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(renderFullPage, 'renderFullPage', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(renderError, 'renderError', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');

  __REACT_HOT_LOADER__.register(_default, '_default', '/home/black/Documents/Mern/React-Test/server/server-compiled.js');
})();

;

//# sourceMappingURL=server-compiled-compiled.js.map

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_express2, '_express2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_compression2, '_compression2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_mongoose2, '_mongoose2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_bodyParser2, '_bodyParser2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_path2, '_path2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_IntlWrapper2, '_IntlWrapper2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_webpack2, '_webpack2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_webpackConfig2, '_webpackConfig2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_webpackDevMiddleware2, '_webpackDevMiddleware2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_webpackHotMiddleware2, '_webpackHotMiddleware2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_react2, '_react2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_reactHelmet2, '_reactHelmet2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_routes2, '_routes2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_post2, '_post2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_userinfo2, '_userinfo2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_dummyData2, '_dummyData2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_config2, '_config2', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(compiler, 'compiler', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(renderFullPage, 'renderFullPage', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(renderError, 'renderError', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_default, '_default', '/Users/thientran/Documents/SourceTree/React-Test/server/server-compiled-compiled.js');
})();

;

//# sourceMappingURL=server-compiled-compiled-compiled.js.map