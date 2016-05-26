


/**
 * 属性类型定义
 */
export type PropDefination = {name: string,type: string}


/**
 * 服务配置参数
 */
export type ServiceConfig = {name?:string,model:any}
/**
 * 全局的容器。
 * 用于储存在注入过程中产生的各种声明数据。
 */
export class Container {
    /**
     * 全局的属性数组。用以保存每一个实体类的属性列表。
     */
    static __props : Array<PropDefination> = [];
    // static  __routelsit = [
    //     {path:'/{0}/list',method:'get',exec:findAll},
    //     {path:'/{0}/create',method:'post',exec:create},
    //     {path:'/{0}/show',method:'get',exec:()=>{}},
    //     {path:'/{0}/delete',method:'delete',exec:()=>{}},
    //     {path:'/{0}/update',method:'post',exec:()=>{}},
    // ]
}
