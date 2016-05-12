

import {ActionConfig} from './types';

/**
 * @name 服务器装饰器接口
 */
export interface HostDecorator {(config:HostConfig)}

/**
 * @name 路由装饰器接口
 */
export interface RouterDecorator{(app:any)}

/**
 * @name 控制器装饰器接口
 */
export interface ControllerDecorator {(name:string):any}

/**
 * @name 行为装饰器接口
 */
export interface ActionDecorator{(parm: ActionConfig )}

/**
 * @name 格式化字符串装饰器接口
 */
export interface FormatDecorator{(str:string,...args):string}
