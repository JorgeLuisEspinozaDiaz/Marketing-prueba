import { ICommand } from '@nestjs/cqrs';
export declare class CreateCampaignCommand implements ICommand {
    readonly user_id: number;
    readonly name: string;
    readonly process_date: string;
    readonly process_hour: string;
    readonly process_status: number;
    readonly phone_list: string;
    readonly message_text: string;
    constructor(user_id: number, name: string, process_date: string, process_hour: string, process_status: number, phone_list: string, message_text: string);
}
