import { Meal } from './../models/meal';
import { User } from './../models/user';
import { Order } from './../models/order';
import { Menu } from './../models/menu';
import { OrderService } from './../services/order/order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router) { }

  menuPanier: [];
  userConnected: User;
  isAuth: boolean;
  prixTotalPanier: any = 0;
  correctPrice: any;
  local: any;
  listArticles: Menu[] = [];
  price: number;
  order: Order;
   
  ngOnInit() {
   /* if (this.auth.isLogged()) {
      this.isAuth = true;
      this.userConnected = this.auth.getUserConnected();
    } else {
      this.userConnected = null;
      this.isAuth = false;
    }*/
    this.recupererPanier();
    if (this.menuPanier != null) {
      this.calculerTotalPanier();
    }
  }

  recupererPanier() {
    if (localStorage.getItem('panier') != null) {
      this.menuPanier = JSON.parse(localStorage.getItem('panier'));
    }
    // Pour supprimer 'panier' du localstorage s'il est vide
    if (JSON.stringify(this.menuPanier) === '[]') {
      localStorage.removeItem('panier');
    }
  }

  supprimerMenu(i) {
    const storagePanier = JSON.parse(localStorage.getItem('panier'));
    storagePanier.splice(i, 1);
    localStorage.setItem('panier', JSON.stringify(storagePanier));
    this.ngOnInit();
    this.router.navigate(['/panier']);
  }

  //  calcul le prix total du panier
  calculerTotalPanier() {
    if (localStorage.getItem('panier') != null) {
      this.local = localStorage.getItem('panier');
      this.listArticles = JSON.parse(this.local);
      this.prixTotalPanier = 0;
      for (let i = 0; i < this.listArticles.length; i++) {
        this.prixTotalPanier =
          this.prixTotalPanier +
          this.listArticles[i].menu.priceDF * this.listArticles[i].quantitePlat;      }
    }
  }

   creerLaCommande() {
    const user = this.userConnected;
    const menu = this.menuPanier;

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.listArticles.length; i++) {
        // const element = this.listArticles[i];
        // console.log(element.menu.id);

        this.order = {
          status: 0,
          creationDate: new Date(),
          menuId: this.listArticles[i].menu.id,
          userId: this.userConnected.id,
          quantities: null
        };

        this.orderService.addOrder(this.order).subscribe(
          resp => {
            this.order = resp; 
            
            localStorage.removeItem('panier');
            this.router.navigate(['/']);

            console.log('order retour: ', this.order);
          },
          error => {
            console.log('Error in Order.ts ... addOrder()', error);
            console.log('order: ', this.order);
          }
        );
      }
    
  } 
}
