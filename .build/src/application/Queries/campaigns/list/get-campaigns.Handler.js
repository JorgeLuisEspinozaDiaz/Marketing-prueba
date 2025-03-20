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
exports.GetCampaignsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const get_campaigns_query_1 = require("./get-campaigns.query");
const campaign_entity_1 = require("../../../../domain/entities/campaign.entity");
let GetCampaignsHandler = class GetCampaignsHandler {
    campaignRepository;
    constructor(campaignRepository) {
        this.campaignRepository = campaignRepository;
    }
    async execute(query) {
        const { startDate, endDate } = query;
        const qb = this.campaignRepository.createQueryBuilder('campaign');
        if (startDate && endDate) {
            qb.where('campaign.process_date BETWEEN :startDate AND :endDate', {
                startDate,
                endDate,
            });
        }
        else if (startDate) {
            qb.where('campaign.process_date >= :startDate', { startDate });
        }
        else if (endDate) {
            qb.where('campaign.process_date <= :endDate', { endDate });
        }
        return qb.getMany();
    }
};
exports.GetCampaignsHandler = GetCampaignsHandler;
exports.GetCampaignsHandler = GetCampaignsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_campaigns_query_1.GetCampaignsQuery),
    __param(0, (0, typeorm_1.InjectRepository)(campaign_entity_1.Campaign)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GetCampaignsHandler);
//# sourceMappingURL=get-campaigns.Handler.js.map