

import {Reflector} from '../../utils/Reflector';

/**
 * 注册所有路由
 */
export var Routing=(app,service:Array<any>)=>{
    service.forEach((s,i)=>{
        var _find = Reflector.GetPropertyValue(s,'__findAll');
        app.route(_find.name).get(_find.func);
        var __create = Reflector.GetPropertyValue(s,'__create');
        app.route(_find.name).post(__create.func);
        var __delete = Reflector.GetPropertyValue(s,'__delete');
        app.route(__delete.name).post(__delete.func);
        var __update = Reflector.GetPropertyValue(s,'__update');
        app.route(__update.name).post(__update.func);
    })
}
