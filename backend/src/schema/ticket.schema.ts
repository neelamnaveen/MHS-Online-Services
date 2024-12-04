import { Schema, Document } from 'mongoose';

export interface Ticket extends Document {
    email: string;
    date: string;
    typeOfService: string;
    place: string;
    status: string;
}

export const TicketSchema = new Schema({
    email: { type: String },
    date: { type: String },
    typeOfService: { type: String },
    place: { type: String },
    comments: { type: String },
    status: { type: String },    
});
