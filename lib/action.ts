
import {ActionDefination} from './define/types.d';
import {ActionDecorator,CallbackDecorator} from './define/decorators.d';
import {Format} from './utils';

/**
 * 此处更新为 action 与  回调
 */
export class ControllerMap {
    /**
     * Map<行为,回调函数>
     */
    // static __Items: Map<ActionDefination, Function> = new Map();

    static __Items: Array<ActionDefination> = [];
}

/**
 * 行为装饰器
 * @param : parm 行为配置参数
 */
export var Action: ActionDecorator = (parm) => {
    return (target: any, key, descrptor: PropertyDescriptor) => {
        var action: ActionDefination = {
            path: Format('/{0}/{1}',parm.ctrl,parm.name),
            value: descrptor.value,
            method: parm.method,
            next:null
        }
        ControllerMap.__Items.push(action);
    }
}

export var Callback:CallbackDecorator = (next)=>{
    return (target: any, key, descrptor: PropertyDescriptor) => {
        ControllerMap.__Items.forEach((action,i)=>{
            if (action.value===descrptor.value) //同一个方法
            action.next = next;
        });
    }
}
