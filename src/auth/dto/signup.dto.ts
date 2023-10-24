import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class signUpDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail({}, {message: 'Please enter a valid email address'})
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(7)
    password: string;
}
