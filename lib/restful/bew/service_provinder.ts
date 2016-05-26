


import {ServiceConfig} from './global';
import {Reflector} from '../../utils/Reflector';
import * as mongoose from 'mongoose';

export var ServiceProvider =(config:ServiceConfig)=>{
    var entity = config.model;   // 实体类
    if (config.name===undefined){// 使用默认的实体类的名称

    }
    var model = Reflector.GetPropertyValue(entity,"__model") ;

    var _findAll=(req,res)=>{
        var query=model.find(null);
        var promise = query.exec();
        promise.addBack((err,docs)=>{
            if (err){
                console.log(err);
                return res.json(err);
            }if (!docs)
            {
                console.log("not found");
                return res.json('not found!');
            }
            console.log(docs);
            return res.json(docs);
        });
    };

    var __update = (req,res,service)=>{}
    var __create =(req,res)=>{

        var m = new model({
            name:req.query.name,
            price:req.query.price,
            number:req.query.number,
            type:req.query.type
        });
        m.save((err,d)=>{
            if (err) return res.send(err);
            return res.json(d);
        });
        return "not found";
    }

    var __delete= (req,res)=>{
        var query = model.remove({_id:req.query.id});
        var promise = query.exec();
        promise.addBack((err,docs)=>{
            if (err){
                console.log(err);
                return res.json(err);
            }if (!docs)
            {
                console.log("not found");
                return res.json('not found!');
            }
            return res.json(docs);
        });
    }
    return (service)=>{
        // 给服务类添加默认的 CRUD 操作
        Reflector.SetPropertyOrMethod(service,'__findAll',{
            name:`/${entity.name}/list`,func:_findAll
        });
        Reflector.SetPropertyOrMethod(service,'__create',{
            name:`/${entity.name}/create`,func:__create
        });
        Reflector.SetPropertyOrMethod(service,'__update',{
            name:`/${entity.name}/create`,func:__update
        });
        Reflector.SetPropertyOrMethod(service,'__delete',{
            name:`/${entity.name}/delete`,func:__delete
        });
    }
}
