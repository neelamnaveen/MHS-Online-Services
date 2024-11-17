import { Schema, Document } from 'mongoose';

export interface Service extends Document {
    date: string;
    typeOfService: string;
    place: string;
    principle: string;
    interest: string;
    platformId: string;
    lenderUserId: string;
    borrowerUserId: string;
    status: string;
}

export const ServiceSchema = new Schema({
    date: { type: String },
    typeOfService: { type: String },
    place: { type: String },
    principle: { type: String },
    interest: { type: String },
    platformId: { type: String },
    lenderUserId: { type: String },
    borrowerUserId: { type: String },
    status: { type: String },
});
