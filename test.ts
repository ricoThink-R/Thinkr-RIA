import * as mongoose from 'mongoose';
import * as express from 'express';
import {Entity,Property,ServiceProvider,Routing} from './index';

var app = express();
app.listen(3000);
mongoose.connect('mongodb://127.0.0.1/thinkr');


@Entity
export class User{
    @Property
    name:string;
    @Property
    password:string;
}

//
//
// var u = new User();
// console.log(Utils.GetPropertyNames(User));
// console.error(Utils.GetPropertyValue(User,'__props'));


@ServiceProvider({
    model:User
})
class Service {}

Routing(app,[Service]);

function abb(name){
    return `How are you, ${name}?`;
}

console.log(abb('rico'));
// var f = Reflect.getOwnPropertyDescriptor(Service,"__findAll").value;
// var f = Utils.GetPropertyValue(Service,'__findAll');
// Utils.Execute(f);
// console.log(f);
