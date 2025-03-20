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
exports.CampaignController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const CreateCampaignCommand_1 = require("../../application/commands/campaigns/CreateCampaignCommand");
const CreateCampaignDTO_1 = require("../../application/commands/campaigns/CreateCampaignDTO");
const send_campaign_command_1 = require("../../application/commands/campaigns/sent/send-campaign.command");
const get_campaigns_query_1 = require("../../application/Queries/campaigns/list/get-campaigns.query");
const campaign_entity_1 = require("../../domain/entities/campaign.entity");
let CampaignController = class CampaignController {
    queryBus;
    commandBus;
    constructor(queryBus, commandBus) {
        this.queryBus = queryBus;
        this.commandBus = commandBus;
    }
    async getCampaigns(startDate, endDate) {
        return this.queryBus.execute(new get_campaigns_query_1.GetCampaignsQuery(startDate, endDate));
    }
    async createCampaign(createCampaignDto) {
        return this.commandBus.execute(new CreateCampaignCommand_1.CreateCampaignCommand(createCampaignDto.user_id, createCampaignDto.name, createCampaignDto.process_date, createCampaignDto.process_hour, createCampaignDto.process_status, createCampaignDto.phone_list, createCampaignDto.message_text));
    }
    async sendCampaign(id) {
        await this.commandBus.execute(new send_campaign_command_1.SendCampaignCommand(id));
        return { message: 'Campaign is being processed' };
    }
};
exports.CampaignController = CampaignController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtiene la lista de campañas',
        description: 'Retorna campañas filtradas por fecha de inicio y fin.',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'startDate',
        required: false,
        type: String,
        example: '2024-03-01',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'endDate',
        required: false,
        type: String,
        example: '2024-03-31',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de campañas por rango de fechas ',
        type: [campaign_entity_1.Campaign],
    }),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "getCampaigns", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva campaña' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Campaña creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCampaignDTO_1.CreateCampaignDto]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "createCampaign", null);
__decorate([
    (0, common_1.Post)(':id/send'),
    (0, swagger_1.ApiOperation)({ summary: 'Enviar campaña', description: 'Ejecuta el envío de mensajes de una campaña específica.' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID de la campaña a enviar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'La campaña está siendo procesada.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Campaña no encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "sendCampaign", null);
exports.CampaignController = CampaignController = __decorate([
    (0, swagger_1.ApiTags)('Campaigns'),
    (0, common_1.Controller)('api/campaigns'),
    __metadata("design:paramtypes", [cqrs_1.QueryBus,
        cqrs_1.CommandBus])
], CampaignController);
//# sourceMappingURL=campaigns.controller.js.map