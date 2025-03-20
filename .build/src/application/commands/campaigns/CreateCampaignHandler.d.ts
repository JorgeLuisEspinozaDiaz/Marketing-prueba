import { ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { Campaign } from '../../../domain/entities/campaign.entity';
import { CreateCampaignCommand } from './CreateCampaignCommand';
export declare class CreateCampaignHandler implements ICommandHandler<CreateCampaignCommand> {
    private readonly campaignRepository;
    constructor(campaignRepository: Repository<Campaign>);
    execute(command: CreateCampaignCommand): Promise<Campaign>;
}
