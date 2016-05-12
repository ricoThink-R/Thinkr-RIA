
import {ControllerDefination,ActionDefination} from './define/types.d';
import {ActionDecorator} from './define/decorators.d';
import {Controller} from './controller';

export class ControllerMap {
    static __Items: Map<ActionDefination, ControllerDefination> = new Map();
}

/**
 * @name 行为装饰器
 */
export var Action: ActionDecorator = (parm) => {
    return (target: any, key, descrptor: PropertyDescriptor) => {
        var action: ActionDefination = {
            name: parm.name,
            func: descrptor.value,
            method: parm.method
        }
        ControllerMap.__Items.set(action, Controller(parm.ctrl));
    }
}
