import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { SendCampaignCommand } from './send-campaign.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from '../../../../domain/entities/campaign.entity';
import { Message } from '../../../../domain/entities/message.entity';
import { Repository } from 'typeorm';
import { TwilioService } from '../../../../infrastructure/configuration/twilio.service';
import { CampaignSentEvent } from '../../../../application/events/campaigns/sent/campaign-sent.event';

@CommandHandler(SendCampaignCommand)
export class SendCampaignHandler
  implements ICommandHandler<SendCampaignCommand>
{
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepo: Repository<Campaign>,
    @InjectRepository(Message)
    private readonly messageRepo: Repository<Message>,
    private readonly twilioService: TwilioService,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: SendCampaignCommand): Promise<void> {
    const { campaignId } = command;
    const campaign = await this.campaignRepo.findOne({
      where: { id: campaignId },
    });
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    // Cambiar estado a "en proceso"
    campaign.process_status = 2;
    await this.campaignRepo.save(campaign);

    // Obtener los teléfonos
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
      } catch (error) {
        message.shipping_status = 3;
      }
      await this.messageRepo.save(message);
    }

    this.eventBus.publish(new CampaignSentEvent(campaignId));
  }
}
