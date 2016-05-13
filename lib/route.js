"use strict";
const enums_1 = require('./define/enums');
const action_1 = require('./action');
exports.Method = enums_1.HttpMethod;
/**
 * @name 路由装饰器实现。
 * @desc
 * @param app:express.Express 接口对象。
 */
exports.Router = (app) => {
    /**
    *   @action: ActionDefination
    **/
    action_1.ControllerMap.__Items.forEach((action, i) => {
        var router = app.route(action.path);
        if (action.method === enums_1.HttpMethod.Get) {
            router.get((req, res) => {
                var paras = [req, res];
                Reflect.apply(action.value, null, paras);
                action.next.call(action);
            });
        }
        if (action.method === enums_1.HttpMethod.Post) {
            router.post((req, res) => {
                var paras = [req, res];
                Reflect.apply(action.value, null, paras);
                action.next.call(action);
            });
        }
    });
};
