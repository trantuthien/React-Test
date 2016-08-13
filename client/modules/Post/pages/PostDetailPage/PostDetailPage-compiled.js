'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostDetailPage = PostDetailPage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactIntl = require('react-intl');

var _PostListItem = require('../../components/PostListItem/PostListItem.css');

var _PostListItem2 = _interopRequireDefault(_PostListItem);

var _PostActions = require('../../PostActions');

var _PostReducer = require('../../PostReducer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Actions
function PostDetailPage(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: props.post.title }),
    _react2.default.createElement(
      'div',
      { className: _PostListItem2.default['single-post'] + ' ' + _PostListItem2.default['post-detail'] },
      _react2.default.createElement(
        'h3',
        { className: _PostListItem2.default['post-title'] },
        props.post.title
      ),
      _react2.default.createElement(
        'p',
        { className: _PostListItem2.default['author-name'] },
        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'by' }),
        ' ',
        props.post.name
      ),
      _react2.default.createElement(
        'p',
        { className: _PostListItem2.default['post-desc'] },
        props.post.content
      )
    )
  );
}

// Actions required to provide data for this component to render in sever side.


// Import Selectors


// Import Style
PostDetailPage.need = [function (params) {
  return (0, _PostActions.fetchPost)(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: (0, _PostReducer.getPost)(state, props.params.cuid)
  };
}

PostDetailPage.propTypes = {
  post: _react.PropTypes.shape({
    name: _react.PropTypes.string.isRequired,
    title: _react.PropTypes.string.isRequired,
    content: _react.PropTypes.string.isRequired,
    slug: _react.PropTypes.string.isRequired,
    cuid: _react.PropTypes.string.isRequired
  }).isRequired
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PostDetailPage, 'PostDetailPage', '/Users/thientran/Documents/SourceTree/React-Test/client/modules/User/pages/PostDetailPage/PostDetailPage.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/thientran/Documents/SourceTree/React-Test/client/modules/User/pages/PostDetailPage/PostDetailPage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/thientran/Documents/SourceTree/React-Test/client/modules/User/pages/PostDetailPage/PostDetailPage.js');
})();

;

//# sourceMappingURL=PostDetailPage-compiled.js.map
