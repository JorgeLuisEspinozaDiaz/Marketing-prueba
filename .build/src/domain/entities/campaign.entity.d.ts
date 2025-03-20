import { User } from "./user.entity";
import { Message } from "./message.entity";
import { CampaignStatus } from "../enums/campaign-status.enum";
export declare class Campaign {
    id: number;
    user_id: number;
    user: User;
    name: string;
    process_date: Date;
    process_hour: string;
    process_status: CampaignStatus;
    phone_list: string;
    message_text: string;
    messages: Message[];
}
