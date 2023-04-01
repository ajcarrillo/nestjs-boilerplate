import { IsBoolean, IsNumber, IsOptional } from "class-validator"

export class PaginateCollectionDto {
  @IsOptional()
  @IsBoolean()
  withoutPagination?: boolean;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  pageSize?: number;
}
