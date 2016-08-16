'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filePath = exports.num = exports.goo = undefined;

var _bar = require('./bar');

Object.defineProperty(exports, 'goo', {
  enumerable: true,
  get: function get() {
    return _bar.fooPrime;
  }
});
var num = exports.num = 1;
var filePath = exports.filePath = './bar';

(0, _bar.fooPrime)();