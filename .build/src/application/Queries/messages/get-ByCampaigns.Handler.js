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
exports.GetMessageByCampaingnsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_ByCampaigns_query_1 = require("./get-ByCampaigns.query");
const typeorm_1 = require("@nestjs/typeorm");
const message_entity_1 = require("../../../domain/entities/message.entity");
const typeorm_2 = require("typeorm");
let GetMessageByCampaingnsHandler = class GetMessageByCampaingnsHandler {
    messageRepository;
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async execute(query) {
        const { campaign_id } = query;
        return await this.messageRepository
            .createQueryBuilder('message')
            .leftJoinAndSelect('message.campaign', 'campaign')
            .where('campaign.id = :campaign_id', { campaign_id })
            .select([
            'message.id',
            'message.text',
            'message.phone',
            'message.process_date',
            'message.process_hour',
            'campaign.id',
            'campaign.name',
        ])
            .getMany();
    }
};
exports.GetMessageByCampaingnsHandler = GetMessageByCampaingnsHandler;
exports.GetMessageByCampaingnsHandler = GetMessageByCampaingnsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_ByCampaigns_query_1.GetMessageByCampaignsQuery),
    __param(0, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GetMessageByCampaingnsHandler);
//# sourceMappingURL=get-ByCampaigns.Handler.js.map