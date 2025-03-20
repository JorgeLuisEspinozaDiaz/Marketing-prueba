import { ConfigService } from '@nestjs/config';
export declare class TwilioService {
    private readonly configService;
    private client;
    private from;
    constructor(configService: ConfigService);
    sendSms(to: string, message: string): Promise<void>;
}
