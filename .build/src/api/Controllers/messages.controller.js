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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const get_ByCampaigns_query_1 = require("../../application/Queries/messages/get-ByCampaigns.query");
const message_entity_1 = require("../../domain/entities/message.entity");
let MessageController = class MessageController {
    queryBus;
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    async getMessagesByCampaign(id) {
        return this.queryBus.execute(new get_ByCampaigns_query_1.GetMessageByCampaignsQuery(id));
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Get)('campaign/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener mensajes por campaña' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: Number,
        description: 'ID de la campaña',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de mensajes',
        type: [message_entity_1.Message],
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getMessagesByCampaign", null);
exports.MessageController = MessageController = __decorate([
    (0, swagger_1.ApiTags)('Mensajes'),
    (0, common_1.Controller)('api/messages'),
    __metadata("design:paramtypes", [cqrs_1.QueryBus])
], MessageController);
//# sourceMappingURL=messages.controller.js.map