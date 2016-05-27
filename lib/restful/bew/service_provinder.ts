


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
        __addback(req,res,promise);
    };

    var __update = (req,res)=>{
        var query = model.update({_id:req.body._id},req.body);
        var promise = query.exec();
        __addback(req,res,promise);

    }
    var __create =(req,res)=>{
        var promise =model.create(req.body);
        __addback(req,res,promise);
    }

    var __delete= (req,res)=>{
        var query = model.remove({_id:req.body._id});
        var promise = query.exec();
        __addback(req,res,promise);
    }

    var __addback=(req,res,promise)=>{
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
        Reflector.SetPropertyOrMethod(service,'__findAll__',{
            name:`/${entity.name}/list`,func:_findAll
        });
        Reflector.SetPropertyOrMethod(service,'__create__',{
            name:`/${entity.name}/create`,func:__create
        });
        Reflector.SetPropertyOrMethod(service,'__update__',{
            name:`/${entity.name}/update`,func:__update
        });
        Reflector.SetPropertyOrMethod(service,'__delete__',{
            name:`/${entity.name}/delete`,func:__delete
        });
    }
}
