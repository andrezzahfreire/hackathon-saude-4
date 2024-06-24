import express, { Request, Response } from 'express';
import { ExamService } from '../../../domain/services/examService.js';
import { DynamoDBEmployeeRepository } from '../../database/dynamoDBEmployeeRepository.js';
import { ExamController } from '../../../application/interfaces/controllers/examController.js';

const router = express.Router();
const examRepository = new DynamoDBEmployeeRepository();
const examService = new ExamService(examRepository);
const examController = new ExamController(examService);

router.get('/:id', async (req: Request, res: Response) => await examController.get(req, res));
router.post('/', async (req: Request, res: Response) => await examController.create(req, res));
router.patch('/:id', async (req: Request, res: Response) => await examController.update(req, res));
router.delete('/:id', async (req: Request, res: Response) => await examController.delete(req, res));

export default router;