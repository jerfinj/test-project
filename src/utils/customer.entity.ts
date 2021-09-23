import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  EntityRepository,
  Repository,
} from 'typeorm';

@Entity('customer')
export class CustomerEntity extends BaseEntity {
  @PrimaryColumn({ name: 'customer_id' })
  customerId: string;

  @Column({ name: 'customer_name' })
  customerName: string;
  
}

@EntityRepository(CustomerEntity)
export class CustomerRepository extends Repository<CustomerEntity> {}
