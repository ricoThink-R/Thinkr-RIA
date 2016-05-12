

import {HttpMethod} from './enums';

/**
 * @name 服务器配置参数。
 */
export type HostConfig ={
    /**
     * @name 端口
     */
    PORT:number,
    /**
     * @name 跨域
     */
    CORS:any,
    /**
     * @name 模版引擎
     */
    ENGINE:any,
    /**
     * @name 服务器应用程序
     */
    APP:any
}




/**
 * @name MVC 行为配置参数
 */
export type ActionConfig={
    /**
     * @name 行为名称
     */
    name:string,
    /**
     * @name 控制器名称
     */
    ctrl:string,
    /**
     * @name 行为提交方法
     */
    method:HttpMethod
}


/**
 * @name 控制器声明
 */
export type ControllerDefination={
    /**
     * @name 控制器名称
     */
    name:string
}

/**
 * @name 行为器声明
 */
export type ActionDefination={
    /**
     * @name 名称
     */
    name:string,
    /**
     * @name 函数
     */
    func:Function,
    /**
     * @name 数据操作方法
     */
    method:HttpMethod
}
