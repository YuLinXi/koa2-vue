import * as $ from '../controllers/test';

export default (router) => ({
  getUsers: router.post('/api/me/', $.createTest),
  patchTest: router.patch('/api/me/:id/', $.patchTest),
  deleteTest: router.delete('/api/me/:id/', $.deleteTest),
})
