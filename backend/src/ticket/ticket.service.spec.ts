import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TicketTicket } from './ticket.ticket';
import { Ticket } from '../schema/ticket.schema';
import { Model } from 'mongoose';

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

const mockTicketModel = {
    new: jest.fn().mockResolvedValue(mockTicket),
    constructor: jest.fn().mockResolvedValue(mockTicket),
    find: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    create: jest.fn().mockResolvedValue(mockTicket),
    exec: jest.fn(),
};

describe('TicketTicket', () => {
    let ticket: TicketTicket;
    let model: Model<Ticket>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TicketTicket,
                {
                    provide: getModelToken(Ticket.name),
                    useValue: mockTicketModel,
                },
            ],
        }).compile();

        ticket = module.get<TicketTicket>(TicketTicket);
        model = module.get<Model<Ticket>>(getModelToken(Ticket.name));
    });

    it('should be defined', () => {
        expect(ticket).toBeDefined();
    });

    it('should add a ticket', async () => {
        const newTicket = await ticket.addTicket(mockTicket);
        expect(newTicket).toEqual(mockTicket);
    });

    it('should update a ticket by id', async () => {
        mockTicketModel.findByIdAndUpdate.mockResolvedValue(mockTicket);
        const updatedTicket = await ticket.updateTicketById('ticketId', mockTicket);
        expect(updatedTicket).toEqual(mockTicket);
    });

    it('should get all tickets by email', async () => {
        mockTicketModel.find.mockResolvedValue([mockTicket]);
        const tickets = await ticket.getAllTicketsByEmail('test@example.com');
        expect(tickets).toEqual([mockTicket]);
    });

    it('should get a ticket by id', async () => {
        mockTicketModel.findById.mockResolvedValue(mockTicket);
        const ticketById = await ticket.getTicketById('ticketId');
        expect(ticketById).toEqual(mockTicket);
    });
});
