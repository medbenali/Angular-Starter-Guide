import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  // create an array of objects

  salesPersonList: SalesPerson[] = [

    new SalesPerson("Mohamed", "BEN ALI", "mohamed.benali@esprit.tn", 50000),
    new SalesPerson("John", "Doe", "john.doe@gmail.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire.murphy@gmail.com", 90000),
    new SalesPerson("Mai", "Truong", "mai.truong@gmail.com", 60000)

  ];

}
