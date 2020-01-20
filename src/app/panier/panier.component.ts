import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {
  private souscription: Subscription;
  public panier: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {}

}
