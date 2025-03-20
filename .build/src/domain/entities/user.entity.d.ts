import { Campaign } from "./campaign.entity";
import { Customer } from "./customer.entity";
export declare class User {
    id: number;
    customer_id: number;
    customer: Customer;
    campaigns: Campaign[];
    username: string;
    status: boolean;
}
