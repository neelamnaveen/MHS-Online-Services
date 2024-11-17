import { Schema, Document } from 'mongoose';

export interface User extends Document {
    name: { type: String },
    emailId: { type: String },
    password: { type: String },
    contactNumber: { type: String },
    userSecret: { type: String },
    platformId: { type: String },
    DOB: { type: String },
    organization: { type: String },
}

export const UserSchema = new Schema({
    name: { type: String },
    emailId: { type: String },
    password: { type: String },
    contactNumber: { type: String },
    userSecret: { type: String },
    platformId: { type: String },
    DOB: { type: String },
    organization: { type: String },
});
