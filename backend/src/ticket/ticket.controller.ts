import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { TicketTicket } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketTicket: TicketTicket) {}

  @Post('')
  async addTicket(@Body() ticketData) {
    return this.ticketTicket.addTicket(ticketData);
  }

  @Put(':ticketId')
  async updateTicketById(@Param('ticketId') ticketId: string, @Body() updateData) {
    return this.ticketTicket.updateTicketById(ticketId, updateData);
  }

  @Get('')
  async getAllTicketsByEmail() {
    return this.ticketTicket.getAllTicketsByEmail();
  }
}
