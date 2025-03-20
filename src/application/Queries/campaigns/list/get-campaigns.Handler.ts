import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetCampaignsQuery } from './get-campaigns.query';
import { Campaign } from 'src/domain/entities/campaign.entity';

@QueryHandler(GetCampaignsQuery)
export class GetCampaignsHandler implements IQueryHandler<GetCampaignsQuery> {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {}

  async execute(query: GetCampaignsQuery): Promise<Campaign[]> {
    const { startDate, endDate } = query;

    const qb = this.campaignRepository.createQueryBuilder('campaign');
   
    if (startDate && endDate) {
      qb.where('campaign.process_date BETWEEN :startDate AND :endDate', {
        startDate,
        endDate,
      });
    } else if (startDate) {
      qb.where('campaign.process_date >= :startDate', { startDate });
    } else if (endDate) {
      qb.where('campaign.process_date <= :endDate', { endDate });
    }

    return qb.getMany();
  }
}
