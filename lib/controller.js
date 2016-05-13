"use strict";
/**
*   @name: 控制器装饰器
**/
exports.Controller = (name) => {
    var ctrl = {
        name: name
    };
    return ctrl;
};
