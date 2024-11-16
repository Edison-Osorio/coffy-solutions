import { CreateHarvestedDto } from './create-harvested.dto';

export interface CreateEmployeeDto {
  readonly employeeId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
}

export interface CreateEmployee {
  createEmployeeDto: CreateEmployeeDto;
  createHarvestedDto: CreateHarvestedDto;
}
