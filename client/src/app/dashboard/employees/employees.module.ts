import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {EmployeesRoutingModule} from './employees-routing.module';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [EmployeesComponent, ListEmployeesComponent, EditEmployeeComponent, CreateEmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgbDatepickerModule,
    FormsModule
  ]
})
export class EmployeesModule { }
