'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userinfoSchema = new Schema({
  username: { type: 'String', required: true },
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
  isactive: { type: 'Number', required: true },
  activecode: { type: 'String', required: true },
  token: { type: 'String', required: true }
});

var _default = _mongoose2.default.model('UserInfo', userinfoSchema);

exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Schema, 'Schema', '/home/black/Documents/Mern/React-Test/server/models/userinfo.js');

  __REACT_HOT_LOADER__.register(userinfoSchema, 'userinfoSchema', '/home/black/Documents/Mern/React-Test/server/models/userinfo.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/black/Documents/Mern/React-Test/server/models/userinfo.js');
})();

;

//# sourceMappingURL=userinfo-compiled.js.map