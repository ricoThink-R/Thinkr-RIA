

## Thinkr-Mook

**此模块是在Express.JS的基础上进行了再次的封装。目的是为了简化MVC项目中 Controller 和 Action 的声明**

整体项目是需要提前安装 `Express` 模块的。

``` py
npm install express --save

```

### 使用说明

+ 安装此模块

```git
npm install thinkr-mook --save
```
+ 在你项目的根目录中添加任意类文件，例如

```git
hello.ts
```

+ 添加对于模块的引用

```ts
    import {Action,Method} from 'thinkr-mook'
```
+ 添加类代码

```ts
export class Hello{

}
```

+ 在本类中添加任意方法，并使用 `Action` 装饰器。

```ts
export class Hello{
    @Action({
        name:'abc',         //此处是行为的名称
        ctrl:'hello',       //此处是控制器名称
        method:Method.Get   //此处是请求方法
    })
    public world(req,res){
        /* 方法中适用的参数:
        req是 express 模块中的 express.Request.
        res是 express 模块中的 express.Response.
        */
        res.send("hello world");

    }
}
```

+ 在根目录添加`app.ts`文件作为项目启动文件, 并在此文件中添加对于`express` 模块的引用

```git
import * as express from 'express'
```

+ 导入所声明`hello.ts`

```git
import {Hello} from './hello'
```
