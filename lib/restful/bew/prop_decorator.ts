

import {Container,PropDefination} from './global';



/**
 *  属性装饰器.
 *  @return 无.
 *  @remarks 在声明实体类与属性时，给属性添加上装饰器，填入到全局的属性数组中进行保存.解析属性名，以及对应的元数据类型.
 *  @example
 *
 *      public class User{
 *
 *          @Property
 *          name:string;
 *
 *          @Property
 *          passowrd:string;
 *      }
 *
 *  __props  输出结果为： [{name:"name",type:"string"},{name:"password",type:"string"}]
 */
export var Property : PropertyDecorator = (target:any,k:string)=>{
    var t = typeof(k).toString();
    var prop: PropDefination = {
        name: k,
        type: t
    };
    if (Container.__props.indexOf({name :k,type:t})===-1)
        Container.__props.push(prop); //生产属性列表
}
