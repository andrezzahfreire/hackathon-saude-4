import { User } from "../entities/user.js";
import { UserRepository } from "../repositories/userRepository.js";

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async getUserById(id: string): Promise<User | null> {
        return await this.userRepository.findById(id);
    }

    async createUser(examData: User): Promise<User> {
        const vaccine = new User(examData);
        return await this.userRepository.create(vaccine);
    }

    async updateUser(id: string, examData: User): Promise<User | null> {
        const vaccine = new User(examData);
        return await this.userRepository.update(id, vaccine);
    }

    async deleteUser(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}