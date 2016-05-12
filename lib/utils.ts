
import {FormatDecorator} from './define/decorators.d';

export var Format:FormatDecorator =(str,...args)=>{
    if (args.length>0)
    args.forEach((a,i)=>{
        str =str.replace(new RegExp("\\{"+i+"\\}","g"), a);
    });
    return str;
}
