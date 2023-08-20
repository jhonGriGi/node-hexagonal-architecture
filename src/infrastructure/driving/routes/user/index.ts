import {Router} from 'express';
import {userController} from '../../../configuration/dependencies/user';

const userRouter: Router = Router();

userRouter
  .get('/', (req, res) => {
    Promise.resolve(userController.findAll(req, res));
  })
  .get('/:id', (req, res) => {
    Promise.resolve(userController.findById(req, res));
  });

export default userRouter;
