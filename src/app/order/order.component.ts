import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order/order.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  id:number;
  orders: any;
  private souscription: Subscription;
  price: any;
  prices = [];

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
    this.route.params.subscribe(param=> this.id = param.id)
  }

  ngOnInit() {
    this.getOrders(this.id)
  }

  getOrders(id) {
    this.souscription = this.orderService.getOrders(id)
    .subscribe(
      resp => {
        this.orders = resp;
        console.log(this.orders);
        this.getAllPrices()
      }
    )  
  }

  cancelOrder(id) {
    this.orderService.cancelOrder(id);
    location.reload();

  }

  computePrice(orderId) {
    this.souscription = this.orderService.computePrice(orderId)
    .subscribe(
      resp => {
        this.price = resp;
        this.price = this.price.priceVAT
        this.prices.push(this.price)
        console.log(this.prices);
        

      }
    )  
  }

  getAllPrices() {
    this.orders.forEach(order => {
      this.computePrice(order.id)
    });
    
  }

}
