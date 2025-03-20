import { QueryBus } from '@nestjs/cqrs';
import { User } from '../../domain/entities/user.entity';
export declare class UserController {
    private readonly queryBus;
    constructor(queryBus: QueryBus);
    getUsers(): Promise<User[]>;
}
