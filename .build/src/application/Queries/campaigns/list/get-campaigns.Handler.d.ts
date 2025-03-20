import { IQueryHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { GetCampaignsQuery } from './get-campaigns.query';
import { Campaign } from '../../../../domain/entities/campaign.entity';
export declare class GetCampaignsHandler implements IQueryHandler<GetCampaignsQuery> {
    private readonly campaignRepository;
    constructor(campaignRepository: Repository<Campaign>);
    execute(query: GetCampaignsQuery): Promise<Campaign[]>;
}
