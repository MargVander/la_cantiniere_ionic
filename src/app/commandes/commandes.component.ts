import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss'],
})
export class CommandesComponent implements OnInit {

  private souscription: Subscription;
  public orders: any;
  public day: any;
  public status: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.day = moment().day();
    console.log(this.day);
    
    
    this.status = 0
    this.getOrdersByDay(this.day)
  }

  getOrdersByDay(selectDay) {
    this.day = selectDay    
    this.souscription = this.orderService.getOrdersByDay(moment().day(this.day).format('YYYY-MM-DD'), moment().day(this.day).add(1, 'days').format('YYYY-MM-DD'), this.status)
    .subscribe(
      resp => {
        this.orders = resp;
        console.log(this.orders);
      }
    )  
  }

  payOrder(id) {
    this.orderService.payOrder(id);
  }

  changeStatus(num) {
    this.status = num;
    this.getOrdersByDay(this.day)
  }

  cancelOrder(id) {
    this.orderService.cancelOrder(id);
  }

}
