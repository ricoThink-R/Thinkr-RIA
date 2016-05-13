"use strict";
const utils_1 = require('./utils');
/**
 * 此处更新为 action 与  回调
 */
class ControllerMap {
}
/**
 * Map<行为,回调函数>
 */
// static __Items: Map<ActionDefination, Function> = new Map();
ControllerMap.__Items = [];
exports.ControllerMap = ControllerMap;
/**
 * 行为装饰器
 * @param : parm 行为配置参数
 */
exports.Action = (parm) => {
    return (target, key, descrptor) => {
        var action = {
            path: utils_1.Format('/{0}/{1}', parm.ctrl, parm.name),
            value: descrptor.value,
            method: parm.method,
            next: null
        };
        ControllerMap.__Items.push(action);
    };
};
exports.Callback = (next) => {
    return (target, key, descrptor) => {
        ControllerMap.__Items.forEach((action, i) => {
            if (action.value === descrptor.value)
                action.next = next;
        });
    };
};
