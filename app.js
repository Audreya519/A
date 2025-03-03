const Koa = require('koa');//导入 Koa 并创建应用实例
const app = new Koa();//导入 Koa 并创建应用实例
const router = require('./api/test.js');//导入路由模块

//添加日志记录中间件
app.use(async (ctx,next)  => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(router.routes());//使用路由中间件
app.listen(3000);//启动服务器