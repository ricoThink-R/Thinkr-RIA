

import {HttpMethod} from './enums';

/**
 *  服务器配置参数。
 */
export type HostConfig = {
    /**
     *  端口
     */
    PORT: number,
    /**
     *  跨域
     */
    CORS: any,
    /**
     *  模版引擎
     */
    ENGINE: any,
    /**
     *  服务器应用程序
     */
    APP: any
}




/**
 *  MVC 行为配置参数
 */
export type ActionConfig = {
    /**
     * 行为名称
     */
    name: string,
    /**
     *  控制器名称
     */
    ctrl: string,
    /**
     *  行为提交方法
     */
    method: HttpMethod
}


/**
 *  行为器声明
 */
export type ActionDefination = {
    /**
     *  名称
     */
    path: string,
    /**
     *  函数
     */
    value: Function,
    /**
     *  回调
     */
    next: Function,
    /**
     *  数据操作方法
     */
    method: HttpMethod
}
