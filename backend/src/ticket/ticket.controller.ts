import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { TicketTicket } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketTicket: TicketTicket) {}

  @Post('add')
  async addTicket(@Body() ticketData) {
    return this.ticketTicket.addTicket(ticketData);
  }

  @Put(':ticketId')
  async updateTicketById(@Param('ticketId') ticketId: string, @Body() updateData) {
    return this.ticketTicket.updateTicketById(ticketId, updateData);
  }

  @Get(':email')
  async getAllTicketsByEmail(@Param('email') email: string) {
    return this.ticketTicket.getAllTicketsByEmail(email);
  }
}
