import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu/menu.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.scss'],
})
export class IngredientEditComponent implements OnInit {
  id:number;
  public ingredient: any;
  private souscription: Subscription;
  ingredientForm: FormGroup;

  constructor(private route: ActivatedRoute, private menuService: MenuService, private formBuilder: FormBuilder, private router: Router) {
    this.route.params.subscribe(param=> this.id = param.id)
  }

  ngOnInit() {
    console.log(this.id);
    this.getIngredient(this.id)
  }

  getIngredient(id){
    this.souscription = this.menuService.getIngredient(id)
    .subscribe(
      resp => {
        this.ingredient = resp;
        console.log(this.ingredient);
        this.ingredientForm = this.formBuilder.group({
          label: [this.ingredient.label, Validators.required],
          description: [this.ingredient.description], 
          image: [this.ingredient.image, Validators.required], 
        });
        
      }
    )    
  }

  onSubmit(){
    this.menuService.editIngredient(this.id, this.ingredientForm.value)
    this.router.navigate(['/ingredients'])

  }

}
