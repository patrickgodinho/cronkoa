import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import jobMap from './jobs';

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = '/start to start and /pause to pause';
});

router.get('/start', ctx => {
  jobMap.job1.start();
  ctx.body = jobMap.job1.running;
});

router.get('/pause', ctx => {
  jobMap.job1.stop();
  ctx.body = jobMap.job1.running;
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 4000);
