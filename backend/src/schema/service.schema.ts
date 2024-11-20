import { Schema, Document } from 'mongoose';

export interface Service extends Document {
    date: string;
    typeOfService: string;
    place: string;
    status: string;
    image: string;
}

export const ServiceSchema = new Schema({
    date: { type: String },
    typeOfService: { type: String },
    place: { type: String },
    status: { type: String },
    image: { type: String },
});
