import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepository } from './utils/customer.entity';
import { environment } from './utils/environments/environment';

@Module({
  imports: [
    TypeOrmModule.forRoot(environment.databaseConfig),
    TypeOrmModule.forFeature([CustomerRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
