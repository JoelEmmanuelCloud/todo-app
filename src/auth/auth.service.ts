import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import {bcrypt} from 'bcryptjs';



@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ) {}



async signUp(signUpDto): Promise<{token: string}> {
    const {name, email, password} = signUpDto

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
        name,
        email,
        password: hashPassword
    });

    const token = this.jwtService.sign({id: user._id})

    return {token}
}

}

