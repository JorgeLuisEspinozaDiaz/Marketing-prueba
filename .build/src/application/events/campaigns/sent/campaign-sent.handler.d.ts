import { IEventHandler } from '@nestjs/cqrs';
import { Campaign } from '../../../../domain/entities/campaign.entity';
import { Repository } from 'typeorm';
import { CampaignSentEvent } from './campaign-sent.event';
import { Message } from '../../../../domain/entities/message.entity';
export declare class CampaignSentHandler implements IEventHandler<CampaignSentEvent> {
    private readonly campaignRepo;
    private readonly messageRepo;
    constructor(campaignRepo: Repository<Campaign>, messageRepo: Repository<Message>);
    handle(event: CampaignSentEvent): Promise<void>;
}
