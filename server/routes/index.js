import Router from 'koa-router';
import users from './test'
const router = new Router();

export default function(app) {
  users(router);
  app
    .use(router.routes())
    .use(router.allowedMethods());
}

