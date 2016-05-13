"use strict";
const controller_1 = require('./controller');
///
///
///
class ControllerMap {
}
ControllerMap.__Items = new Map();
exports.ControllerMap = ControllerMap;
/**
 * @name 行为装饰器
 * <param name="parm" type="ActionConfig">要介绍的名字</param>
 */
exports.Action = (parm) => {
    return (target, key, descrptor) => {
        var action = {
            name: parm.name,
            func: descrptor.value,
            method: parm.method
        };
        ControllerMap.__Items.set(action, controller_1.Controller(parm.ctrl));
    };
};
