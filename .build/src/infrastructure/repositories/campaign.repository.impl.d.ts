import { Campaign } from "../../domain/entities/campaign.entity";
import { CampaignRepository } from "../../domain/repositories/campaign.repository";
import { Repository } from "typeorm";
export declare class CampaignRepositoryImpl implements CampaignRepository {
    private readonly campaignRepository;
    constructor(campaignRepository: Repository<Campaign>);
    findById(id: string): Promise<Campaign | null>;
    save(user: Campaign): Promise<Campaign>;
}
