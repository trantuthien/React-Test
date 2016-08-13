'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostListItem = require('./PostListItem/PostListItem');

var _PostListItem2 = _interopRequireDefault(_PostListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostList(props) {
  return _react2.default.createElement(
    'div',
    { className: 'col12' },
    props.posts.map(function (post) {
      return _react2.default.createElement(_PostListItem2.default, {
        post: post,
        key: post.cuid,
        onDelete: function onDelete() {
          return props.handleDeletePost(post.cuid);
        }
      });
    })
  );
}

// Import Components


PostList.propTypes = {
  posts: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    name: _react.PropTypes.string.isRequired,
    title: _react.PropTypes.string.isRequired,
    content: _react.PropTypes.string.isRequired,
    slug: _react.PropTypes.string.isRequired,
    cuid: _react.PropTypes.string.isRequired
  })).isRequired,
  handleDeletePost: _react.PropTypes.func.isRequired
};

var _default = PostList;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PostList, 'PostList', '/Users/thientran/Downloads/mern_v2/client/modules/UserInfo/components/PostList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/thientran/Downloads/mern_v2/client/modules/UserInfo/components/PostList.js');
})();

;

//# sourceMappingURL=PostList-compiled.js.map
