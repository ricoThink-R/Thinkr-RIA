

import {Container} from './global';


import * as mongoose from 'mongoose';

import {Reflector} from '../../utils/Reflector';



/**
 *  实体类装饰器.
 *  @remarks 将全局容器中的属性列表作为属性注入到当前的实体类的中.
 *           在注入完成后, 清除容器中的内容.
 *  @example
 *
 *  @Entity
 *  export class User{
 *
 *      @Property
 *      name:string;
 *      @Property
 *      password:string;
 *  }
 *  console.log(Object.getOwnPropertyNames(User));
 *
 *  @output:
 *  [ 'length', 'name', 'prototype', '__props', '__model' ]
 */

export var Entity : ClassDecorator =(target)=>{

    // 定义属性列表集合.
    Reflector.SetPropertyOrMethod(target,'__props',Container.__props);

    // 定义实体类与数据库文档的映射.
    var schema = new mongoose.Schema;

    // 循环遍历容器中的全部属性，并映射为数据库文档属性.
    Container.__props.forEach((p,i)=>{
        schema.path(p.name,p.type);
    });

    // 注册文档对象.
    var model:mongoose.Model<mongoose.Document>= mongoose.model(target.name,schema);
    // 定义文档对象属性.
    Reflector.SetPropertyOrMethod(target,'__model',model);

    // 清除容器的内容.
    Container.__props= [];

}
