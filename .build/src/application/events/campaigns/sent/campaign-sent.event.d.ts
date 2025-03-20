import { IEvent } from '@nestjs/cqrs';
export declare class CampaignSentEvent implements IEvent {
    readonly campaignId: number;
    constructor(campaignId: number);
}
