const path = require('path');
const request = require('request');
const Koa = require('koa');
const KoaBodyParser = require('koa-bodyparser');
const Compress = require('koa-compress');
const staticServer = require('koa-static');

const app = new Koa();
const app2 = new Koa();

app.use(Compress({
  threshold: 2048 // 要压缩的最小响应字节
}));

app.use(KoaBodyParser());

// log
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  let ms = new Date() - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms); // 显示执行的时间
});

// Koa静态文件服务
app.use(staticServer(path.resolve('dist')));

// 端口转发
app.use((ctx) => {
  if(ctx.path === '/api') {
    ctx.body = ctx.req.pipe(request(`${ctx.protocol}://0.0.0.0:8016`));
  }
});

app.listen(80, () => {
  console.log(`Koa is listening in 80`);
});


app2.listen(8016, () => {
  app2.use(ctx => {
    ctx.body = '哦也，/api的请求转发过来了';
  });
  console.log(`Koa is listening in 8016`);
});

