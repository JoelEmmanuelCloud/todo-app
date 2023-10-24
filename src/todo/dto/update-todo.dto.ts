import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class TodoDTO {

  
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsBoolean()
  readonly isCompleted: boolean;
}
