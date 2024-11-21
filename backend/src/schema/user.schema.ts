import { Schema, Document } from 'mongoose';

export interface User extends Document {
    role: { type: String },
    email: { type: String },
    password: { type: String },
    contactNumber: { type: String },
}

export const UserSchema = new Schema({
    role: { type: String },
    email: { type: String },
    password: { type: String },
    contactNumber: { type: String },
});
