import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu/menu.service'
import { Subscription } from 'rxjs'
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import {Router} from "@angular/router"


@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss'],
})
export class MenuEditComponent implements OnInit {
  id:number;
  public menu: any;
  private souscription: Subscription;
  public meals: any;
  menuForm: FormGroup;
  numbers = Array(52).fill(0).map((x,i)=>i);

  constructor(private route: ActivatedRoute, private menuService: MenuService, private formBuilder: FormBuilder, private router: Router) {
    this.route.params.subscribe(param=> this.id = param.id)
  }

  ngOnInit() {
    this.getMenu(this.id);
    this.getMeals();
  }

  getMenu(id){
    this.souscription = this.menuService.getMenu(id)
    .subscribe(
      resp => {
        this.menu = resp;
        console.log(this.menu);
        this.menuForm = this.formBuilder.group({
          label: [this.menu.label, Validators.required],
          description: [this.menu.description], 
          image: [this.menu.image],
          priceDF: [this.menu.priceDF, Validators.required],
          availableForWeeks: [],
          mealsId: [],
        });
        
      }
    )    
  }

  getMeals() {
    this.souscription = this.menuService.getMeals()
    .subscribe(
      resp => {
        this.meals = resp;
        console.log(this.meals);
        
      }
    )    
  }

  onSubmit(){
    this.menuService.editMenu(this.id, this.menuForm.value);
    this.router.navigate(['/menus']);

  }

}
