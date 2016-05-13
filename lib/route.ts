
import {HttpMethod} from './define/enums';

import {Action,ControllerMap} from './action';

import {RouterDecorator} from './define/decorators.d';

import {Format} from './utils';

export var  Method = HttpMethod;
/**
 * @name 路由装饰器实现。
 * @desc
 * @param app:express.Express 接口对象。
 */
export var Router : RouterDecorator=(app:any)=>{
    /**
    *   @action: ActionDefination
    **/
    ControllerMap.__Items.forEach((action,i) => {
        var router = app.route(action.path);
        if (action.method===HttpMethod.Get) {
            router.get((req,res)=>{
                var paras : ArrayLike<any> = [req,res];
                Reflect.apply(action.value,null,paras);
                action.next.call(action);
            })
        }
        if (action.method===HttpMethod.Post) {
            router.post((req,res)=>{
                var paras : ArrayLike<any> = [req,res];
                Reflect.apply(action.value,null,paras);
                action.next.call(action);
            })
        }
    });
}
