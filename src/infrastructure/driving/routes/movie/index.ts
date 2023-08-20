import {Router} from 'express';
import {movieController} from '../../../configuration/dependencies/movie';

const movieRouter: Router = Router();

movieRouter
  .get('/', (req, res) => {
    Promise.resolve(movieController.findAll(req, res));
  })
  .get('/:id', (req, res) => {
    Promise.resolve(movieController.findById(req, res));
  });

export default movieRouter;
