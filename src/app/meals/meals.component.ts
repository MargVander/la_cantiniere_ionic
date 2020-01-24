import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu/menu.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit {

  public meals: any;
  private souscription: Subscription;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMeals()
  }

  getMeals(event?){
    this.souscription = this.menuService.getMeals()
    .subscribe(
      resp => {
        this.meals = resp;
        console.log(this.meals);
        if(event){
          event.target.complete();
          }
      }
    )    
  }

  deleteMeal(id) {
    this.menuService.deleteMeal(id)
    location.reload();
  }

}
