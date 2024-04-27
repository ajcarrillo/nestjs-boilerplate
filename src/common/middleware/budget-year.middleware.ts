import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class BudgetYearMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const currentYear = new Date().getFullYear().toString();
    const budgetYear = req.headers['x-budget-year'] as string || currentYear;

    req['budgetYear'] = budgetYear;

    next();
  }
}
