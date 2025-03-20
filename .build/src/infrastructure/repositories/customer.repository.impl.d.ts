import { Customer } from "../../domain/entities/customer.entity";
import { CustomerRepository } from "../../domain/repositories/customer.repository";
import { Repository } from "typeorm";
export declare class CustomerRepositoryImpl implements CustomerRepository {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    findById(id: string): Promise<Customer | null>;
    save(user: Customer): Promise<Customer>;
}
