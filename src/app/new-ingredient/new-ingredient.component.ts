import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu/menu.service'
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.scss'],
})
export class NewIngredientComponent implements OnInit {

  ingredientForm = this.formBuilder.group({
    label: ['', Validators.required],
    description: ['', Validators.required], 
    image: ['', Validators.required], 
  });

  constructor(private menuService: MenuService, private formBuilder: FormBuilder) { }

  ngOnInit() {}

  onSubmit(){
    this.menuService.addIngredient(this.ingredientForm.value)
  }

}
