import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class TodoDTO {
  @IsNotEmpty()
  @IsString()
  title: string;
  
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  isCompleted: boolean;
}
