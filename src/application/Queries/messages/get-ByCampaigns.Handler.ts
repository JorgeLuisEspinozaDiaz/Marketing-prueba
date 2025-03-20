import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetMessageByCampaignsQuery } from './get-ByCampaigns.query';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../../../domain/entities/message.entity';
import { Repository } from 'typeorm';

@QueryHandler(GetMessageByCampaignsQuery)
export class GetMessageByCampaingnsHandler
  implements IQueryHandler<GetMessageByCampaignsQuery>
{
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async execute(query: GetMessageByCampaignsQuery): Promise<Message[]> {
    const { campaign_id } = query;
    return await this.messageRepository
    .createQueryBuilder('message')
    .leftJoinAndSelect('message.campaign', 'campaign') 
    .where('campaign.id = :campaign_id', { campaign_id })
    .select([
      'message.id', 
      'message.text', 
      'message.phone', 
      'message.process_date', 
      'message.process_hour', 
      'campaign.id', 
      'campaign.name' , 
    ])
    .getMany();
  }
}
