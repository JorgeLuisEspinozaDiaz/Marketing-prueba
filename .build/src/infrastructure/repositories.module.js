"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_impl_1 = require("./repositories/user.repository.impl");
const campaign_repository_impl_1 = require("./repositories/campaign.repository.impl");
const customer_repository_impl_1 = require("./repositories/customer.repository.impl");
const message_repository_impl_1 = require("./repositories/message.repository.impl");
const campaign_entity_1 = require("../domain/entities/campaign.entity");
const customer_entity_1 = require("../domain/entities/customer.entity");
const message_entity_1 = require("../domain/entities/message.entity");
const user_entity_1 = require("../domain/entities/user.entity");
const get_campaigns_Handler_1 = require("../application/Queries/campaigns/list/get-campaigns.Handler");
const campaigns_controller_1 = require("../api/Controllers/campaigns.controller");
const CreateCampaignHandler_1 = require("../application/commands/campaigns/CreateCampaignHandler");
const user_controller_1 = require("../api/Controllers/user.controller");
const get_users_Handler_1 = require("../application/Queries/users/list/get-users.Handler");
const messages_controller_1 = require("../api/Controllers/messages.controller");
const get_ByCampaigns_Handler_1 = require("../application/Queries/messages/get-ByCampaigns.Handler");
const send_campaign_handler_1 = require("../application/commands/campaigns/sent/send-campaign.handler");
const twilio_service_1 = require("./configuration/twilio.service");
const campaign_sent_handler_1 = require("../application/events/campaigns/sent/campaign-sent.handler");
let RepositoriesModule = class RepositoriesModule {
};
exports.RepositoriesModule = RepositoriesModule;
exports.RepositoriesModule = RepositoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            typeorm_1.TypeOrmModule.forFeature([campaign_entity_1.Campaign, customer_entity_1.Customer, message_entity_1.Message, user_entity_1.User]),
        ],
        providers: [
            twilio_service_1.TwilioService,
            user_repository_impl_1.UserRepositoryImpl,
            campaign_repository_impl_1.CampaignRepositoryImpl,
            customer_repository_impl_1.CustomerRepositoryImpl,
            message_repository_impl_1.MessageRepositoryImpl,
            get_campaigns_Handler_1.GetCampaignsHandler,
            get_users_Handler_1.GetUsersHandler,
            get_ByCampaigns_Handler_1.GetMessageByCampaingnsHandler,
            CreateCampaignHandler_1.CreateCampaignHandler,
            send_campaign_handler_1.SendCampaignHandler, campaign_sent_handler_1.CampaignSentHandler
        ],
        exports: [
            cqrs_1.CqrsModule,
            user_repository_impl_1.UserRepositoryImpl,
            campaign_repository_impl_1.CampaignRepositoryImpl,
            customer_repository_impl_1.CustomerRepositoryImpl,
            message_repository_impl_1.MessageRepositoryImpl,
            twilio_service_1.TwilioService,
        ],
        controllers: [campaigns_controller_1.CampaignController, user_controller_1.UserController, messages_controller_1.MessageController],
    })
], RepositoriesModule);
//# sourceMappingURL=repositories.module.js.map