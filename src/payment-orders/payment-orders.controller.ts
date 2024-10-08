import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors
} from "@nestjs/common";
import { PaymentOrdersService } from "./payment-orders.service"
import { CreatePaymentOrderDto, UpdatePaymentOrderDto } from "./dto"
import { Auth, GetUser } from "../auth/decorators"
import { FileFieldsInterceptor } from "@nestjs/platform-express"
import { BudgetYear } from "../common/decorators";

@Controller('payment-orders')
@Auth()
export class PaymentOrdersController {
  constructor(private readonly paymentOrdersService: PaymentOrdersService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'payment_file', maxCount: 1 },
    { name: 'check_file', maxCount: 1 },
  ]))
  create(
    @BudgetYear() budgetYear: string,
    @Body() createPaymentOrderDto: CreatePaymentOrderDto,
    @UploadedFiles() files: { payment_file?: Express.Multer.File[], check_file?: Express.Multer.File[] },
    @GetUser() user,
  ) {
    if(files.payment_file){
      createPaymentOrderDto.payment_file = files.payment_file[0];
    }

    if(files.check_file) {
      createPaymentOrderDto.check_file = files.check_file[0];
    }

    return this.paymentOrdersService.create(createPaymentOrderDto, user, budgetYear);
  }

  @Get()
  findAll(
    @BudgetYear() budgetYear: string,
    @Query('show') show: 'presupuestos' | 'subpresupuestos' = 'presupuestos'
  ) {
    return this.paymentOrdersService.findAll(show, budgetYear);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentOrdersService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'payment_file', maxCount: 1 },
    { name: 'check_file', maxCount: 1 },
  ]))
  update(
    @Body() updatePaymentOrderDto: UpdatePaymentOrderDto,
    @UploadedFiles() files: { payment_file?: Express.Multer.File[], check_file?: Express.Multer.File[] },
    @Param('id') id: string,
    @GetUser() user,
  ) {
    if(files.payment_file){
      updatePaymentOrderDto.payment_file = files.payment_file[0];
    }

    if(files.check_file) {
      updatePaymentOrderDto.check_file = files.check_file[0];
    }

    return this.paymentOrdersService.update(id, updatePaymentOrderDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentOrdersService.remove(id);
  }
}
