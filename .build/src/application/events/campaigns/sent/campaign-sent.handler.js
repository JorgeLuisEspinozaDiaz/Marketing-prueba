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
exports.CampaignSentHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const campaign_entity_1 = require("../../../../domain/entities/campaign.entity");
const typeorm_2 = require("typeorm");
const campaign_sent_event_1 = require("./campaign-sent.event");
const message_entity_1 = require("../../../../domain/entities/message.entity");
let CampaignSentHandler = class CampaignSentHandler {
    campaignRepo;
    messageRepo;
    constructor(campaignRepo, messageRepo) {
        this.campaignRepo = campaignRepo;
        this.messageRepo = messageRepo;
    }
    async handle(event) {
        const { campaignId } = event;
        console.log('Evento recibido:', event.campaignId);
        const messages = await this.messageRepo.find({
            where: { campaign_id: campaignId },
        });
        const allSent = messages.every((msg) => msg.shipping_status !== 1);
        if (allSent) {
            const campaign = await this.campaignRepo.findOne({
                where: { id: campaignId },
            });
            if (campaign) {
                campaign.process_status = 3;
                await this.campaignRepo.save(campaign);
            }
            else {
                console.warn(`No se encontró la campaña con ID ${campaignId}`);
            }
        }
    }
};
exports.CampaignSentHandler = CampaignSentHandler;
exports.CampaignSentHandler = CampaignSentHandler = __decorate([
    (0, cqrs_1.EventsHandler)(campaign_sent_event_1.CampaignSentEvent),
    __param(0, (0, typeorm_1.InjectRepository)(campaign_entity_1.Campaign)),
    __param(1, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CampaignSentHandler);
//# sourceMappingURL=campaign-sent.handler.js.map