import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer: 
      {id: 1, name: 'company 1', 
      state: 'CO', email: 'example@yahoo.com'}, 
      total: 333, placed: new Date(2016,12,3), 
      fulfilled: new Date(2016,13,3)},

      {id: 2, customer: 
        {id: 1, name: "company 2", 
        state: 'CO', email: 'example2@yahoo.com'}, 
        total: 254, placed: new Date(2016,11,3), 
        fulfilled: new Date(2016,11,3)},
    
        {id: 3, customer: 
          {id: 1, name: "company 3", 
          state: 'CO', email: 'example3@yahoo.com'}, 
          total: 111, placed: new Date(2016,12,3), 
          fulfilled: new Date(2016,13,3)},

          {id: 4, customer: 
            {id: 1, name: "company 4", 
            state: 'CO', email: 'example4@yahoo.com'}, 
            total: 745, placed: new Date(2016,16,3), 
            fulfilled: new Date(2016,17,3)},

            {id: 5, customer: 
              {id: 1, name: "company 5", 
              state: 'CO', email: 'example5@yahoo.com'}, 
              total: 443, placed: new Date(2016,12,3), 
              fulfilled: new Date(2016,15,3)},

  ];
  ngOnInit() {
  }

}
