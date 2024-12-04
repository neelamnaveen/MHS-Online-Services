import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ServiceModule } from './service/service.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModule } from './ticket/ticket.module';
require('dotenv').config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URI),
    UserModule,
    ServiceModule,
    TicketModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
