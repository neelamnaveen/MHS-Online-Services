import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

import { User } from '../schema/user.schema';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private userModel: Model<User>) {}

    async register(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const createdUser = new this.userModel({ ...createUserDto, password: hashedPassword });
        return createdUser.save();
    }

    async login(userReq: CreateUserDto): Promise<boolean> {
        const user = await this.getUserByEmail(userReq.email);
        if (!user) {
            return false;
        }
        return bcrypt.compare(userReq.password, user.password);
    }

    async getUserByEmail(email: string): Promise<User> {
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async updateUserByEmail(email: string, updateUserDto: UpdateUserDto): Promise<User> {
        const updatedUser = await this.userModel.findOneAndUpdate({ email }, updateUserDto, { new: true }).exec();
        if (!updatedUser) {
            throw new NotFoundException('User not found');
        }
        return updatedUser;
    }
}
