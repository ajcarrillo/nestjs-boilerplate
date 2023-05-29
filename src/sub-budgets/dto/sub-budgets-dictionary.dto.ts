import { IsNotEmpty, IsString } from 'class-validator';

export class SubBudgetsDictionaryDto {
  @IsString()
  @IsNotEmpty()
  search: string;
}
