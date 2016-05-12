
import {HttpMethod} from './define/enums';

import {Action,ControllerMap} from './action';

import {RouterDecorator} from './define/decorators.d';

import {Format} from './utils';

export var  Method = HttpMethod;
/**
 * @name 路由装饰器实现
 */
export var Router : RouterDecorator=(app:any)=>{
    /**
    *   @v: ControllerDefination
    *   @k: ActionDefination
    **/
    console.log(ControllerMap.__Items);
    ControllerMap.__Items.forEach((v,k) => {
        var path = Format('/{0}/{1}',v.name,k.name);
        console.log(path);
        var router = app.route(path);
        if (k.method===HttpMethod.Get) {
            router.get((req,res)=>{
                var paras : ArrayLike<any> = [req,res];
                Reflect.apply(k.func,null,paras);
            })
        }
        if (k.method===HttpMethod.Post) {
            router.post((req,res)=>{
                var paras : ArrayLike<any> = [req,res];
                Reflect.apply(k.func,null,paras);
            })
        }

    });
}
