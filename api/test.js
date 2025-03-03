const Router =require('koa-router');
const router= new Router();


router.get('/api/',(ctx,next)=>{
    ctx.body = 'Hello world!';
}).get('/api/test',(ctx,next)=>{
    ctx.body ={
        msg:'here is test',
        query:ctx.query,//query就是url里面的值，这个值就是一个对象。
        queryStr:ctx.querystring,
    }
}).post('/api/users',(ctx,next) => {
    ctx.body ='here is users';
}).all('/api/users/:id',(ctx,next) => {
    // ...
});


module.exports = router;