import {Request, Response} from 'express';
import {UserService} from '../../../../application/ports/user/user_service';

export function UserController(service: UserService) {
  const findAll = async (req: Request, res: Response) => {
    const data = await service.findAll();

    res.status(200).send(data);
  };

  const findById = async (req: Request, res: Response) => {
    const idParam = req.params.id;

    const data = await service.findById(idParam);

    res.status(200).send(data);
  };

  return {
    findAll,
    findById,
  };
}
