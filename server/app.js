import Koa from 'koa';
import * as config from './config';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import middleWares from './middlewares';
import mongoose from 'mongoose';
import router from './routes';

mongoose.connect(config.DB, {useNewUrlParser: true});
const db = mongoose.connection;
const app = new Koa();
app.use(bodyParser());
app.use(cors());
middleWares(app);
router(app);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongodb connected success!!')
});
app.on('test', () => {
  console.log('tst')
});
app.on('error', (err, ctx) => {
  console.error('error', err, ctx);
});
// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.error(`${ctx.method} ${ctx.response.status} ${ctx.url} - ${ms}`);
});
app.listen(config.PORT);
console.log(`server start at port ${config.PORT}`);
