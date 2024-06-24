import { Vaccine } from "../entities/vaccine.js";
import { VaccineRepository } from "../repositories/vaccineRepository.js";

export class VaccineService {
    constructor(private vaccineRepository: VaccineRepository) {}

    async getVaccineById(id: string): Promise<Vaccine | null> {
        return await this.vaccineRepository.findById(id);
    }

    async createVaccine(employeeData: Vaccine): Promise<Vaccine> {
        const vaccine = new Vaccine(employeeData);
        return await this.vaccineRepository.create(vaccine);
    }

    async updateVaccine(id: string, employeeData: Vaccine): Promise<Vaccine | null> {
        const vaccine = new Vaccine(employeeData);
        return await this.vaccineRepository.update(id, vaccine);
    }

    async deleteVaccine(id: string): Promise<void> {
        await this.vaccineRepository.delete(id);
    }
}