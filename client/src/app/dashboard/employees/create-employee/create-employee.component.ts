import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  public managerSelected = false;

  constructor() { }

  ngOnInit() {
  }

  employeeTypeChange(event) {
    const { value } = event.target;
    this.managerSelected = value === 'manager';
  }

}
