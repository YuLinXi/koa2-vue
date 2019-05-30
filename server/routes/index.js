import Router from 'koa-router';
import users from './test'
import subTest from './subTest';
const router = new Router();

export default function(app) {
  users(router);
  subTest(router);
  app
    .use(router.routes())
    .use(router.allowedMethods());
}

