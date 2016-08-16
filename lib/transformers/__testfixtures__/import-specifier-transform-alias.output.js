'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goo = undefined;

var _bar = require('./bar');

Object.defineProperty(exports, 'goo', {
  enumerable: true,
  get: function get() {
    return _bar.fooPrime;
  }
});


(0, _bar.fooPrime)();