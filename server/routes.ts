import { request, Router } from 'express';
import * as express from 'express';

const router = Router();
router.get('/', (request, response) => {
  return response.json("OK")});

router.use("./routes/index", router);
router.use('/auth', router);
  
export default router;