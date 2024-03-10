import { Router } from 'express';

import userController from '../controllers/UserController';

import loginRequiered from '../middlewares/loginRequired';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequiered, userController.update);
router.delete('/', loginRequiered, userController.delete);

export default router;
