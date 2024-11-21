import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketTicket } from './ticket.ticket';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSchema } from 'src/schema/ticket.schema';

@Module({
  imports: [ MongooseModule.forFeature([{ name: "Ticket", schema: TicketSchema }]) ],
  controllers: [TicketController],
  providers: [TicketTicket],
})
export class TicketModule {}
