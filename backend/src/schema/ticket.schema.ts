import { Schema, Document } from 'mongoose';

export interface Ticket extends Document {
    date: string;
    typeOfService: string;
    place: string;
    comments: string;
}

export const TicketSchema = new Schema({
    date: { type: String },
    typeOfService: { type: String },
    place: { type: String },
    comments: { type: String },
});
