import { QueryBus } from '@nestjs/cqrs';
import { Message } from '../../domain/entities/message.entity';
export declare class MessageController {
    private readonly queryBus;
    constructor(queryBus: QueryBus);
    getMessagesByCampaign(id: number): Promise<Message[]>;
}
