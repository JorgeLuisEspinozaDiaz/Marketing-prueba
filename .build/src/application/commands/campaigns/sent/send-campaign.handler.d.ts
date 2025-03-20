import { EventBus, ICommandHandler } from '@nestjs/cqrs';
import { SendCampaignCommand } from './send-campaign.command';
import { Campaign } from '../../../../domain/entities/campaign.entity';
import { Message } from '../../../../domain/entities/message.entity';
import { Repository } from 'typeorm';
import { TwilioService } from '../../../../infrastructure/configuration/twilio.service';
export declare class SendCampaignHandler implements ICommandHandler<SendCampaignCommand> {
    private readonly campaignRepo;
    private readonly messageRepo;
    private readonly twilioService;
    private readonly eventBus;
    constructor(campaignRepo: Repository<Campaign>, messageRepo: Repository<Message>, twilioService: TwilioService, eventBus: EventBus);
    execute(command: SendCampaignCommand): Promise<void>;
}
