import { Param } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { AppService } from './app.service';
// import CreateUserDto from './dto/create-user.dto';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getMessage()
 {
  return this.appService.getText();
}

  @Get('/name')
  getHello() {
    return this.appService.getName();
  }
  @Post('/name')
  getName(@Body() user: any) {
    console.log('----CONTROLLER-----');
    return this.appService.createCustomer(user);
  }

  @Get(':customerId')
  findOne(@Param() _customerId) {
    console.log(_customerId.customerId);
    return this.appService.findOne(_customerId.customerId);
  }
}
