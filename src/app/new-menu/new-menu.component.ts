import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu/menu.service'
import { FormBuilder, Validators } from "@angular/forms"
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.scss'],
})
export class NewMenuComponent implements OnInit {

  menuForm = this.formBuilder.group({
    label: ['', Validators.required],
    description: ['', Validators.required], 
    image: ['', Validators.required],
    priceDF: ['', Validators.required],
    availableForWeeks: [],
    mealIds: [],
  });
  public meals: any;
  private souscription: Subscription;
  numbers = Array(52).fill(0).map((x,i)=>i);

  constructor(private menuService: MenuService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getMeals()
  }

  onSubmit(){
    console.log(this.menuForm.value);
    this.menuService.addMenu(this.menuForm.value)
    
  }

  getMeals(){
    this.souscription = this.menuService.getMeals()
    .subscribe(
      resp => {
        this.meals = resp;
        console.log(this.meals);
        
      }
    )    
  }

}
