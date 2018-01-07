import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import jobMap from './jobs';
import jobs from './context';
import pause from './pause';

const app = new Koa();
const router = new Router();
const Jobs = new jobs();
router.get('/', ctx => {
  ctx.body = '/start to start and /pause to pause';
});

router.get('/start', ctx => {
  jobMap.job1.start();
  // Jobs.job.start();
  ctx.body = jobMap.job1.running;
});

router.get('/pause', ctx => {
  // jobMap.job1.stop();
  // Jobs.job.stop();
  pause();
  ctx.body = jobMap.job1.running;
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 4000);
