import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const BudgetYear = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.budgetYear;
  },
);
