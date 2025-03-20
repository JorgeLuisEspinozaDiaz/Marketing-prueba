"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCampaignHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const send_campaign_command_1 = require("./send-campaign.command");
const typeorm_1 = require("@nestjs/typeorm");
const campaign_entity_1 = require("../../../../domain/entities/campaign.entity");
const message_entity_1 = require("../../../../domain/entities/message.entity");
const typeorm_2 = require("typeorm");
const twilio_service_1 = require("../../../../infrastructure/configuration/twilio.service");
const campaign_sent_event_1 = require("../../../../application/events/campaigns/sent/campaign-sent.event");
let SendCampaignHandler = class SendCampaignHandler {
    campaignRepo;
    messageRepo;
    twilioService;
    eventBus;
    constructor(campaignRepo, messageRepo, twilioService, eventBus) {
        this.campaignRepo = campaignRepo;
        this.messageRepo = messageRepo;
        this.twilioService = twilioService;
        this.eventBus = eventBus;
    }
    async execute(command) {
        const { campaignId } = command;
        const campaign = await this.campaignRepo.findOne({
            where: { id: campaignId },
        });
        if (!campaign) {
            throw new Error('Campaign not found');
        }
        campaign.process_status = 2;
        await this.campaignRepo.save(campaign);
        const phoneNumbers = campaign.phone_list.split(',');
        for (const phone of phoneNumbers) {
            const now = new Date();
            const processDate = now.toISOString().split('T')[0];
            const processHour = now.toTimeString().split(' ')[0];
            const message = this.messageRepo.create({
                campaign_id: campaignId,
                phone,
                text: campaign.message_text,
                shipping_status: 1,
                process_date: processDate,
                process_hour: processHour,
            });
            await this.messageRepo.save(message);
            try {
                await this.twilioService.sendSms(phone, campaign.message_text);
                message.shipping_status = 2;
            }
            catch (error) {
                message.shipping_status = 3;
            }
            await this.messageRepo.save(message);
        }
        this.eventBus.publish(new campaign_sent_event_1.CampaignSentEvent(campaignId));
    }
};
exports.SendCampaignHandler = SendCampaignHandler;
exports.SendCampaignHandler = SendCampaignHandler = __decorate([
    (0, cqrs_1.CommandHandler)(send_campaign_command_1.SendCampaignCommand),
    __param(0, (0, typeorm_1.InjectRepository)(campaign_entity_1.Campaign)),
    __param(1, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        twilio_service_1.TwilioService,
        cqrs_1.EventBus])
], SendCampaignHandler);
//# sourceMappingURL=send-campaign.handler.js.map