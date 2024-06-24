import express, { Request, Response } from 'express';
import { VaccineService } from '../../../domain/services/vaccineService.js';
import { DynamoDBEmployeeRepository } from '../../database/dynamoDBEmployeeRepository.js';
import { VaccineController } from '../../../application/interfaces/controllers/vaccineController.js';

const router = express.Router();
const employeeRepository = new DynamoDBEmployeeRepository();
const employeeService = new VaccineService(employeeRepository);
const vaccineController = new VaccineController(employeeService);

router.get('/:id', async (req: Request, res: Response) => await vaccineController.get(req, res));
router.post('/', async (req: Request, res: Response) => await vaccineController.create(req, res));
router.patch('/:id', async (req: Request, res: Response) => await vaccineController.update(req, res));
router.delete('/:id', async (req: Request, res: Response) => await vaccineController.delete(req, res));

export default router;