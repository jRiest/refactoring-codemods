'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filePath = exports.num = exports.foo = exports.bar = undefined;

var _bar = require('./new/path/to/bar');

Object.keys(_bar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bar[key];
    }
  });
});
Object.defineProperty(exports, 'bar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bar).default;
  }
});

var _foo = require('./new/path/to/foo');

Object.defineProperty(exports, 'foo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_foo).default;
  }
});

var _bar2 = _interopRequireDefault(_bar);

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var num = exports.num = 1;
var filePath = exports.filePath = './bar';

(0, _bar2.default)();
(0, _foo2.default)();