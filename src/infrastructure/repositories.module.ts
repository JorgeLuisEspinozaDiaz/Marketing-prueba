import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepositoryImpl } from './repositories/user.repository.impl';
import { CampaignRepositoryImpl } from './repositories/campaign.repository.impl';
import { CustomerRepositoryImpl } from './repositories/customer.repository.impl';
import { MessageRepositoryImpl } from './repositories/message.repository.impl';
import { Campaign } from 'src/domain/entities/campaign.entity';
import { Customer } from 'src/domain/entities/customer.entity';
import { Message } from 'src/domain/entities/message.entity';
import { User } from 'src/domain/entities/user.entity';
import { GetCampaignsHandler } from 'src/application/Queries/campaigns/list/get-campaigns.Handler';
import { CampaignController } from 'src/api/Controllers/campaigns.controller';
import { CreateCampaignHandler } from 'src/application/commands/campaigns/CreateCampaignHandler';
import { UserController } from 'src/api/Controllers/user.controller';
import { GetUsersHandler } from 'src/application/Queries/users/list/get-users.Handler';
import { MessageController } from 'src/api/Controllers/messages.controller';
import { GetMessageByCampaingnsHandler } from 'src/application/Queries/messages/get-ByCampaigns.Handler';
import { SendCampaignHandler } from 'src/application/commands/campaigns/sent/send-campaign.handler';
import { TwilioService } from './configuration/twilio.service';
import { CampaignSentHandler } from 'src/application/events/campaigns/sent/campaign-sent.handler';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Campaign, Customer, Message, User]),
  ],
  providers: [
// Servicios
TwilioService, // <-- REGISTRAR TWILIO SERVICE
    
    // Repositories
    UserRepositoryImpl,
    CampaignRepositoryImpl,
    CustomerRepositoryImpl,
    MessageRepositoryImpl,
   // Query Handlers
   GetCampaignsHandler,
   GetUsersHandler,
   GetMessageByCampaingnsHandler,
   //command Handlers
   CreateCampaignHandler, 
   SendCampaignHandler,CampaignSentHandler
  ],
  exports: [
    CqrsModule,
    UserRepositoryImpl,
    CampaignRepositoryImpl,
    CustomerRepositoryImpl,
    MessageRepositoryImpl,
    TwilioService, 

  ],
  controllers: [CampaignController, UserController, MessageController],

})
export class RepositoriesModule {}
