'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goo = exports.foo = undefined;

var _foo = require('./foo');

Object.keys(_foo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _foo[key];
    }
  });
});
Object.defineProperty(exports, 'foo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_foo).default;
  }
});

var _goo = require('../../goo');

Object.defineProperty(exports, 'goo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_goo).default;
  }
});

var _foo2 = _interopRequireDefault(_foo);

var _goo2 = _interopRequireDefault(_goo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _foo2.default)();
(0, _goo2.default)();