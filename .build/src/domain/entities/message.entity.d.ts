import { Campaign } from "./campaign.entity";
import { MessageStatus } from "../enums/message-status.enun";
export declare class Message {
    id: number;
    campaign_id: number;
    campaign: Campaign;
    phone: string;
    text: string;
    shipping_status: MessageStatus;
    process_date: Date;
    process_hour: string;
}
