

## Thinkr-Mook

**此模块是在Express.JS的基础上进行了再次的封装。目的是为通过简单的代码对与mongodb数据库数据实现RESTFUL形式的数据提供服务。**

整体项目是需要提前安装 `Express` 模块的。

``` py
npm install express --save

```

### 使用说明

+ 安装此模块

```py
npm install thinkr-mook --save
```
+ 在你项目中添加实体类

```py
User.ts
```
+ 添加对于模块的引用，并添加实体类代码

```ts
import {Entity,Property} from 'thinkr-mook'

@Entity
export class User{
    @Property
    name:string;
    @Property
    password:string;
}
```

+ 在项目中添加数据服务类

```py
UserService.ts
```
+ 添加对于模块的引用，并通过装饰器注入实体类完成代码

```ts
import {ServiceProvider} from 'thinkr-mook'

@ServiceProvider({
    model:User
})
class UserService {}
```

+ 在根目录添加`app.ts`文件作为项目启动文件, 并在此文件中添加对于`express`和`mongoose` 模块的引用


```ts
import * as express from 'express';
import * as mongoose from 'mongoose';
```

+ 导入模块的引用

```ts
    import {Routing} from 'thinkr-mook'
```

+ 导入所声明`UserService.ts`

```ts
import {UserService} from './UserService'
```

+ 完整的`app.ts`代码

```ts
import * as express from 'express';
import * as mongoose from 'mongoose';
import {Routing} from 'thinkr-mook'
import {UserService} from './UserService'

var app = express();
app.listen(3000);
mongoose.connect('mongodb://127.0.0.1/数据库');
/**注册数据服务
*
*  可在项目中添加多个服务类，最终注册时，以数组形式传入到路由中
*/
Routing(app,[Service]);
```

完成后即可启动服务器，所需要的CRUD方法都通过模块注入而生成。

访问地址按以下规则：

在`http://地址:端口/实体类名`基础上

+   `/list`   **GET**  获取数据
+   `/create` **POST** 添加数据
+   `/update` **POST** 修改数据
+   `/delete` **POST** 删除数据

如实例代码中的`User`类，接口为：
```url
http://127.0.0.1:3000/user/list
http://127.0.0.1:3000/user/create
http://127.0.0.1:3000/user/update
http://127.0.0.1:3000/user/delete
```

结果以JSON形式返回。
