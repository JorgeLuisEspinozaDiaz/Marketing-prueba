import { ICommand } from "@nestjs/cqrs";
export declare class SendCampaignCommand implements ICommand {
    readonly campaignId: number;
    constructor(campaignId: number);
}
