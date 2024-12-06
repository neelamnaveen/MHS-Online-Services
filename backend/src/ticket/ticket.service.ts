import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Ticket } from '../schema/ticket.schema';
import { CreateTicketDto, UpdateTicketDto } from '../dto/ticket.dto';

@Injectable()
export class TicketTicket {
    constructor(@InjectModel("Ticket") private ticketModel: Model<Ticket>) {}

    async addTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
        createTicketDto.status = "Pending";
        const createdTicket = new this.ticketModel(createTicketDto);
        return createdTicket.save();
    }

    async updateTicketById(id: string, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
        const updatedTicket = await this.ticketModel.findByIdAndUpdate(id, updateTicketDto, { new: true }).exec();
        if (!updatedTicket) {
            throw new NotFoundException('Ticket not found');
        }
        return updatedTicket;
    }

    async getAllTicketsByEmail(): Promise<Ticket[]> {
        return this.ticketModel.find({}).exec();
    }

    async getTicketById(id: string): Promise<Ticket> {
        const ticket = await this.ticketModel.findById(id).exec();
        if (!ticket) {
            throw new NotFoundException('Ticket not found');
        }
        return ticket;
    }

    async deleteTicket(id: string): Promise<string> {
        await this.ticketModel.deleteOne({_id:id}).exec();

        return "Deletion succeeded"
    }
}
