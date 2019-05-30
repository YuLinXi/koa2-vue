import * as $ from '../controllers/subTest';

export default (router) => ({
  create: router.post('/api/sub_test/', $.create),
})
