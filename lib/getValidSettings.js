"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _path = _interopRequireDefault(require("path"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pwd = process.cwd();

var appHtml = _path["default"].resolve(pwd, 'public/index.html'); // Prepare Data for Multiple Entry


function _default(params) {
  var isArray = Object.prototype.toString.call(params) === '[object Array]';

  if (!isArray) {
    return null;
  }

  var settings = params.filter(function (entry) {
    return entry && Object.keys(entry).length;
  });

  if (!settings || !settings.length) {
    return null;
  }

  return settings.map(function (entry) {
    if (!entry.entry) {
      throw new Error('Missing attribute [entry], Received  ' + JSON.stringify(entry));
    }

    if (entry.outPath) {
      entry.outPath = entry.outPath.replace(/^\//, '').replace(/\/$/, '');
    }

    var entryPath = _path["default"].resolve(pwd, entry.entry);

    if (entry.template) {
      (0, _utils.checkFileExist)(entry.template);
    }

    (0, _utils.checkFileExist)(entryPath);
    return {
      name: entry.name || (0, _utils.formatName)(entry.entry),
      entry: entryPath,
      template: entry.template,
      outPath: entry.outPath
    };
  });
}