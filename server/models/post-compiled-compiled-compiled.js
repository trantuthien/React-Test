'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Schema = _mongoose2.default.Schema;

var postSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

var _default = _mongoose2.default.model('Post', postSchema);

exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Schema, 'Schema', '/Users/thientran/Documents/SourceTree/React-Test/server/models/post.js');

  __REACT_HOT_LOADER__.register(postSchema, 'postSchema', '/Users/thientran/Documents/SourceTree/React-Test/server/models/post.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/thientran/Documents/SourceTree/React-Test/server/models/post.js');
})();

;

//# sourceMappingURL=post-compiled.js.map

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_mongoose2, '_mongoose2', '/home/black/Documents/Mern/React-Test/server/models/post-compiled.js');

  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', '/home/black/Documents/Mern/React-Test/server/models/post-compiled.js');

  __REACT_HOT_LOADER__.register(Schema, 'Schema', '/home/black/Documents/Mern/React-Test/server/models/post-compiled.js');

  __REACT_HOT_LOADER__.register(postSchema, 'postSchema', '/home/black/Documents/Mern/React-Test/server/models/post-compiled.js');

  __REACT_HOT_LOADER__.register(_default, '_default', '/home/black/Documents/Mern/React-Test/server/models/post-compiled.js');
})();

;

//# sourceMappingURL=post-compiled-compiled.js.map

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_mongoose2, '_mongoose2', '/Users/thientran/Documents/SourceTree/React-Test/server/models/post-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', '/Users/thientran/Documents/SourceTree/React-Test/server/models/post-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(Schema, 'Schema', '/Users/thientran/Documents/SourceTree/React-Test/server/models/post-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(postSchema, 'postSchema', '/Users/thientran/Documents/SourceTree/React-Test/server/models/post-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_default, '_default', '/Users/thientran/Documents/SourceTree/React-Test/server/models/post-compiled-compiled.js');
})();

;

//# sourceMappingURL=post-compiled-compiled-compiled.js.map