"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCampaignCommand = void 0;
class CreateCampaignCommand {
    user_id;
    name;
    process_date;
    process_hour;
    process_status;
    phone_list;
    message_text;
    constructor(user_id, name, process_date, process_hour, process_status, phone_list, message_text) {
        this.user_id = user_id;
        this.name = name;
        this.process_date = process_date;
        this.process_hour = process_hour;
        this.process_status = process_status;
        this.phone_list = phone_list;
        this.message_text = message_text;
    }
}
exports.CreateCampaignCommand = CreateCampaignCommand;
//# sourceMappingURL=CreateCampaignCommand.js.map