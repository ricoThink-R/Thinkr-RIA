"use strict";
/**
 * 输出Router 路由实现
 * Method : get,post(已经实现),put,delete
 */
var route_1 = require('./lib/route');
exports.Router = route_1.Router;
exports.Method = route_1.Method;
var action_1 = require('./lib/action');
exports.Action = action_1.Action;
exports.Callback = action_1.Callback;
