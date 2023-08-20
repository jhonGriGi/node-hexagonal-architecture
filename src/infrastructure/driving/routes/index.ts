import {Router} from 'express';
import userRouter from './user';
import movieRouter from './movie';

const router: Router = Router();

router.use('/users', userRouter);
router.use('/movies', movieRouter);

export default router;
