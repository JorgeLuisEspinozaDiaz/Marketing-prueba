import { Message } from "../../domain/entities/message.entity";
import { MessageRepository } from "../../domain/repositories/message.repository";
import { Repository } from "typeorm";
export declare class MessageRepositoryImpl implements MessageRepository {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    findById(id: string): Promise<Message | null>;
    save(message: Message): Promise<Message>;
}
