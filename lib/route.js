"use strict";
const enums_1 = require('./define/enums');
const action_1 = require('./action');
const utils_1 = require('./utils');
exports.Method = enums_1.HttpMethod;
/**
 * @name 路由装饰器实现。
 * @desc
 * @param app:express.Express 接口对象。
 */
exports.Router = (app) => {
    /**
    *   @v: ControllerDefination
    *   @k: ActionDefination
    **/
    console.log(action_1.ControllerMap.__Items);
    action_1.ControllerMap.__Items.forEach((v, k) => {
        var path = utils_1.Format('/{0}/{1}', v.name, k.name);
        console.log(path);
        var router = app.route(path);
        if (k.method === enums_1.HttpMethod.Get) {
            router.get((req, res) => {
                var paras = [req, res];
                Reflect.apply(k.func, null, paras);
            });
        }
        if (k.method === enums_1.HttpMethod.Post) {
            router.post((req, res) => {
                var paras = [req, res];
                Reflect.apply(k.func, null, paras);
            });
        }
    });
};
