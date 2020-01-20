import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-a-la-carte',
  templateUrl: './a-la-carte.component.html',
  styleUrls: ['./a-la-carte.component.scss'],
})
export class ALaCarteComponent implements OnInit {

  private souscription: Subscription;
  public meals: any;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMealsByDay()
  }

  getMealsByDay() {    
    this.souscription = this.menuService.getMealsByDay()
    .subscribe(
      resp => {
        this.meals = resp;
        console.log(this.meals);
      }
    )    
  };

}
