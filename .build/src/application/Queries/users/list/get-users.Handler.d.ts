import { IQueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from './get-users.query';
import { User } from '../../../../domain/entities/user.entity';
import { Repository } from 'typeorm';
export declare class GetUsersHandler implements IQueryHandler<GetUserQuery> {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    execute(query: GetUserQuery): Promise<User[]>;
}
