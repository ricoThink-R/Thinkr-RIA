"use strict";
/**
 * @name HTTP 数据操作方法
 */
(function (HttpMethod) {
    HttpMethod[HttpMethod["Get"] = 0] = "Get";
    HttpMethod[HttpMethod["Post"] = 1] = "Post";
    HttpMethod[HttpMethod["Put"] = 2] = "Put";
    HttpMethod[HttpMethod["Delete"] = 3] = "Delete";
})(exports.HttpMethod || (exports.HttpMethod = {}));
var HttpMethod = exports.HttpMethod;
