import { Exam } from "../entities/exam.js";

export interface ExamRepository {
  findById(id: string): Promise<Exam | null>;
  create(exam: Exam): Promise<Exam>;
  update(id: string, exam: Exam): Promise<Exam | null>;
  delete(id: string): Promise<void>;
}