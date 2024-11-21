import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TicketController } from './ticket.controller';
import { TicketTicket } from './ticket.ticket';
import { Ticket } from '../schema/ticket.schema';
import { Model } from 'mongoose';
import { CreateTicketDto, UpdateTicketDto } from '../dto/ticket.dto';

const mockTicket = {
    date: '2023-11-16',
    typeOfTicket: 'test',
    place: 'test place',
    principle: '1000',
    interest: '10%',
    platformId: 'platform123',
    lenderUserId: 'lender123',
    borrowerUserId: 'borrower123',
    status: 'active',
};

describe('TicketController', () => {
    let controller: TicketController;
    let ticket: TicketTicket;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TicketController],
            providers: [
                TicketTicket,
                {
                    provide: getModelToken(Ticket.name),
                    useValue: Model,
                },
            ],
        }).compile();

        controller = module.get<TicketController>(TicketController);
        ticket = module.get<TicketTicket>(TicketTicket);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should add a ticket', async () => {
        jest.spyOn(ticket, 'addTicket').mockImplementation(async () => mockTicket);
        const result = await controller.addTicket(mockTicket as CreateTicketDto);
        expect(result).toEqual(mockTicket);
    });

    it('should update a ticket by id', async () => {
        jest.spyOn(ticket, 'updateTicketById').mockImplementation(async () => mockTicket);
        const result = await controller.updateTicketById('ticketId', mockTicket as UpdateTicketDto);
        expect(result).toEqual(mockTicket);
    });

    it('should get all tickets by email', async () => {
        jest.spyOn(ticket, 'getAllTicketsByEmail').mockImplementation(async () => [mockTicket]);
        const result = await controller.getAllTicketsByEmail('test@example.com');
        expect(result).toEqual([mockTicket]);
    });

    it('should get a ticket by id', async () => {
        jest.spyOn(ticket, 'getTicketById').mockImplementation(async () => mockTicket);
        const result = await controller.getTicketById('ticketId');
        expect(result).toEqual(mockTicket);
    });
});
