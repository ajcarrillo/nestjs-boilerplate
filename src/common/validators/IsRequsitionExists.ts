// import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, ValidationOptions, registerDecorator } from 'class-validator';
// import { Requisition } from "../../requisitions/entities"
//
// @ValidatorConstraint({ async: true })
// export class IsRequisitionIdExistConstraint implements ValidatorConstraintInterface {
//   async validate(requisition_id: number, args: ValidationArguments) {
//     const entityManager = getRepository();
//     const requisition = await entityManager.findOne(Requisition, requisition_id);
//     return !!requisition;
//   }
// }
//
// export function IsRequisitionIdExist(validationOptions?: ValidationOptions) {
//   return function (object: any, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName,
//       options: validationOptions,
//       constraints: [],
//       validator: IsRequisitionIdExistConstraint,
//     });
//   };
// }

import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator"
import { Injectable } from "@nestjs/common"
import { RequisitionsService } from "../../requisitions/requisitions.service"

@ValidatorConstraint({name: 'IsRequisitionIdExist', async: true })
@Injectable()
export class IsRequisitionIdExistConstraint implements ValidatorConstraintInterface {
  constructor(
    private readonly requisitionService: RequisitionsService,
  ) {
  }

  async validate(requisition_id: string, args: ValidationArguments) {
    try {
      await this.requisitionService.findOne(requisition_id)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }
}

export function IsRequisitionIdExist(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsRequisitionIdExistConstraint,
    });
  };
}
