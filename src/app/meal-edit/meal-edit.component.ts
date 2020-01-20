import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu/menu.service'
import { Subscription } from 'rxjs'
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import {Router} from "@angular/router"

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.scss'],
})
export class MealEditComponent implements OnInit {

  id:number;
  public meal: any;
  private souscription: Subscription;
  public ingredients: any;
  mealForm: FormGroup;
  numbers = Array(52).fill(0).map((x,i)=>i);

  constructor(private route: ActivatedRoute, private menuService: MenuService, private formBuilder: FormBuilder, private router: Router) {
    this.route.params.subscribe(param=> this.id = param.id)
  }

  ngOnInit() {
    this.getIngredients()
    this.getMeal(this.id)
  }

  getMeal(id){
    this.souscription = this.menuService.getMeal(id)
    .subscribe(
      resp => {
        this.meal = resp;
        console.log(this.meal);
        this.mealForm = this.formBuilder.group({
          label: [this.meal.label, Validators.required],
          description: [this.meal.description], 
          image: [this.meal.image, Validators.required],
          priceDF: [this.meal.priceDF, Validators.required],
          availableForWeeks: [],
          ingredientsId: [],
        });
        
      }
    )    
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

  onSubmit(){
    this.menuService.editMeal(this.id, this.mealForm.value);
    this.router.navigate(['/meals']);

  }

}
