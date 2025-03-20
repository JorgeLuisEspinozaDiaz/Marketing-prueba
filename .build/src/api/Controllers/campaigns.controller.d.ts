import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCampaignDto } from '../../application/commands/campaigns/CreateCampaignDTO';
import { Campaign } from '../../domain/entities/campaign.entity';
export declare class CampaignController {
    private readonly queryBus;
    private readonly commandBus;
    constructor(queryBus: QueryBus, commandBus: CommandBus);
    getCampaigns(startDate?: string, endDate?: string): Promise<Campaign[]>;
    createCampaign(createCampaignDto: CreateCampaignDto): Promise<any>;
    sendCampaign(id: number): Promise<{
        message: string;
    }>;
}
