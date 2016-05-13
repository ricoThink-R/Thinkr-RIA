

import {ActionConfig, HostConfig} from './types';

/**
 * 服务器装饰器接口
 */
export interface HostDecorator { (config: HostConfig) }

/**
 * 路由装饰器接口
 */
export interface RouterDecorator { (app: any) }


/**
 * 行为装饰器接口
 */
export interface ActionDecorator { (parm: ActionConfig) }

/**
 * 回调函数装饰器接口
 */
export interface CallbackDecorator { (callback: Function) }

/**
 * 格式化字符串装饰器接口
 */
export interface FormatDecorator { (str: string, ...args): string }
