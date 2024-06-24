import { Request, Response } from "express";
import { UserService } from "../../../domain/services/userService.js";

export class UserController {
  constructor(private userService: UserService) {}
    async get(req: Request, res: Response) {
        const { id } = req.params;
            try {
                const employee = await this.userService.getUserById(id);
                if (employee) {
                    res.status(200).json(employee);
                } else {
                    res.status(404).json({ error: "Employee not found" });
                }
            } catch (e) {
                res.status(500).json({ error: "Could not retrieve employee" });
            }
    }

    async create(req: Request, res: Response) {
        const employeeData = req.body;
        try {
            const newEmployee = await this.userService.createUser(employeeData);
            res.status(201).json(newEmployee);
        } catch (e) {
            res.status(500).json({ error: "Error creating employee" });
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const employeeData = req.body;
        try {
            const updatedEmployee = await this.userService.updateUser(id, employeeData);
            if (updatedEmployee) {
                res.status(200).json(updatedEmployee);
            } else {
                res.status(404).json({ error: "Employee not found" });
            }
        } catch (e) {
            res.status(500).json({ error: "Error updating employee" });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await this.userService.deleteUser(id);
            res.status(200).json({ message: "Employee deleted" });
        } catch (e) {
            res.status(500).json({ error: "Error deleting employee" });
        }
    }

}