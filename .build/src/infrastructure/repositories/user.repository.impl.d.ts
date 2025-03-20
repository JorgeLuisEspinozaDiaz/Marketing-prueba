import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";
import { Repository } from "typeorm";
export declare class UserRepositoryImpl implements UserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findById(id: string): Promise<User | null>;
    save(user: User): Promise<User>;
}
