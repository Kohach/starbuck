import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  public loading = true;
  employees = [
    {
      id: 1,
      firstname: 'Alexis',
      lastname: 'Montagne',
      dateOfBirth: '29/05/1996',
      dateOfEmployment: '02/03/2006',
      employeeManager: null
    },
    {
      id: 2,
      firstname: 'Antoine',
      lastname: 'Salty',
      dateOfBirth: '01/10/2002',
      dateOfEmployment: '15/06/2011',
      employeeManager: 'Alexis Montagne'
    },
    {
      id: 3,
      firstname: 'Adrien',
      lastname: 'Sadboy Gomuscu',
      dateOfBirth: '27/12/1996',
      dateOfEmployment: '01/04/2008',
      employeeManager: null
    },
    {
      id: 4,
      firstname: 'Benjamin',
      lastname: 'Lechevelu',
      dateOfBirth: '17/01/1997',
      dateOfEmployment: '10/08/2014',
      employeeManager: 'Adrien Sadboy Gomuscu'
    },
    {
      id: 5,
      firstname: 'Victor',
      lastname: 'Ruco Sifredi',
      dateOfBirth: '19/11/2003',
      dateOfEmployment: '02/07/2020',
      employeeManager: 'Alexis Montagne'
    },
    {
      id: 6,
      firstname: 'Maxime',
      lastname: 'Healthyboy Gomuscu',
      dateOfBirth: '12/02/1997',
      dateOfEmployment: '18/09/2017',
      employeeManager: 'Adrien Sadboy Gomuscu'
    }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
