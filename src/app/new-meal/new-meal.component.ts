import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu/menu.service'
import { FormBuilder, Validators } from "@angular/forms"
import { Subscription } from 'rxjs'
import {Router} from "@angular/router"

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.scss'],
})
export class NewMealComponent implements OnInit {

  mealForm = this.formBuilder.group({
    label: ['', Validators.required],
    description: ['', Validators.required], 
    image: ['', Validators.required],
    priceDF: ['', Validators.required],
    availableForWeeks: [],
    ingredientsId: [],
  });
  public ingredients: any;
  private souscription: Subscription;
  numbers = Array(52).fill(0).map((x,i)=>i);

  constructor(private menuService: MenuService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.getIngredients()
  }

  onSubmit(){
    console.log(this.mealForm.value);
    this.menuService.addMeal(this.mealForm.value)
    this.router.navigate(['/meals']);
  }

  getIngredients(){
    this.souscription = this.menuService.getIngredients()
    .subscribe(
      resp => {
        this.ingredients = resp;
        console.log(this.ingredients);
        
      }
    )    
  }

}
