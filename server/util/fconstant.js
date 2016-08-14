/**
 * Created by thientran on 8/14/16.
 */
var constant = require('./constant');
function Fconstant() {
}
Fconstant.prototype.randomIntInc = function (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
};
Fconstant.prototype.hashPlainTextPassword = function (password) {
  return require('crypto').createHash('sha1').update(password).digest('base64');
};

Fconstant.prototype.response = function (type_response, res, success, code, message) {
  switch (type_response) {
    case constant.RES_TYPE_JSON:
      res.json({success: success, mode: code, message: message});
      break;
    default:
      res.send('success: ' + success + ' mode: ' + mode + ' message: ' + message);
      break;
  }
};

module.exports = Fconstant;