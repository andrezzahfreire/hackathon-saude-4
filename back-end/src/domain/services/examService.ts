import { Exam } from "../entities/exam.js";
import { ExamRepository } from "../repositories/examRepository.js";

export class ExamService {
    constructor(private examRepository: ExamRepository) {}

    async getExamById(id: string): Promise<Exam | null> {
        return await this.examRepository.findById(id);
    }

    async createExam(examData: Exam): Promise<Exam> {
        const vaccine = new Exam(examData);
        return await this.examRepository.create(vaccine);
    }

    async updateExam(id: string, examData: Exam): Promise<Exam | null> {
        const vaccine = new Exam(examData);
        return await this.examRepository.update(id, vaccine);
    }

    async deleteExam(id: string): Promise<void> {
        await this.examRepository.delete(id);
    }
}