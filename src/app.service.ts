import { Injectable, Logger } from '@nestjs/common';
import { CustomerEntity, CustomerRepository } from './utils/customer.entity';

@Injectable()
export class AppService {
  getOne(): string {
    throw new Error('Method not implemented.');
  }
  constructor(private CR: CustomerRepository) {}
  getText():string {
    return 'hello';
           }
  getHello(): string {
    return 'Hello World!';
  }
  getName() {
    return this.CR.find();
  }

  findOne(_customerId) {
    return this.CR.findOne({ customerId: _customerId });
  }

  createCustomer(user: any) {
    console.log('----SERVICE-----', user);
    const newCustomer = new CustomerEntity();
    newCustomer.customerId = user.customer_id.value;
    newCustomer.customerName = user.customer_name.value;
    return this.CR.save(newCustomer);
  }
}
