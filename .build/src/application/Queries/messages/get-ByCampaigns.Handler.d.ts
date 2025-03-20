import { IQueryHandler } from '@nestjs/cqrs';
import { GetMessageByCampaignsQuery } from './get-ByCampaigns.query';
import { Message } from '../../../domain/entities/message.entity';
import { Repository } from 'typeorm';
export declare class GetMessageByCampaingnsHandler implements IQueryHandler<GetMessageByCampaignsQuery> {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    execute(query: GetMessageByCampaignsQuery): Promise<Message[]>;
}
