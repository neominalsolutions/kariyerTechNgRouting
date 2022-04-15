import { Component, OnInit } from '@angular/core';
import { Order } from './order';

@Component({
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {


  order:Order  = {
    orderDate: new Date(),
    currency:'TRY',
    customerFirstName:'Ali',
    customerLastname:'Tan',
    shipCompany:'A Company',
    listPrice:362.60,
    status: 'Shipped'
  }

  // Completed, Shipped, Not Completed, Procesing


  constructor() { }

  ngOnInit(): void {
  }

}
