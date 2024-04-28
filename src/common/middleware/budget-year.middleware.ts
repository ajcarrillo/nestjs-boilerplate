import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class BudgetYearMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const currentYear = new Date().getFullYear().toString();
    req['budgetYear'] = req.headers['x-budget-year'] as string || currentYear;

    next();
  }
}
