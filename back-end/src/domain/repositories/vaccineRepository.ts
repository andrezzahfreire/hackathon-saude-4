import { Vaccine } from "../entities/vaccine.js";

export interface VaccineRepository {
  findById(id: string): Promise<Vaccine | null>;
  create(vaccine: Vaccine): Promise<Vaccine>;
  update(id: string, vaccine: Vaccine): Promise<Vaccine | null>;
  delete(id: string): Promise<void>;
}