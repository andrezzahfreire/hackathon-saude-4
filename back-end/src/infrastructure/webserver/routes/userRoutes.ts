import express, { Request, Response } from 'express';
import { UserService } from '../../../domain/services/userService.js';
import { DynamoDBEmployeeRepository } from '../../database/dynamoDBEmployeeRepository.js';
import { UserController } from '../../../application/interfaces/controllers/userController.js';

const router = express.Router();
const userRepository = new DynamoDBEmployeeRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get('/:id', async (req: Request, res: Response) => await userController.get(req, res));
router.post('/', async (req: Request, res: Response) => await userController.create(req, res));
router.patch('/:id', async (req: Request, res: Response) => await userController.update(req, res));
router.delete('/:id', async (req: Request, res: Response) => await userController.delete(req, res));

export default router;