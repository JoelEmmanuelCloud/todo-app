import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class signInDto {
    @IsEmail({}, {message: 'Please enter a valid email address'})
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
