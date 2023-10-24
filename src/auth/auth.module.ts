import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/schemas/user.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [

        PassportModule.register({defaultStrategy: 'jwt'}),

        MongooseModule.forFeature([{name: 'User', schema: userSchema}])

    ],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule {}
