import { User } from "../entities/user.js";

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  create(user: User): Promise<User>;
  update(id: string, user: User): Promise<User | null>;
  delete(id: string): Promise<void>;
}