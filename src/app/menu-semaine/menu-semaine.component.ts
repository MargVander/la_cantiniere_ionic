import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Component, OnInit } from '@angular/core';
// import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from '../services/menu/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-semaine',
  templateUrl: './menu-semaine.component.html',
  styleUrls: ['./menu-semaine.component.scss'],
})
export class MenuSemaineComponent implements OnInit {

  closeResult: string;
  quantitePlat: number = 1;
  // modalOptions: NgbModalOptions;
  private souscription: Subscription;
  public menus: any;
  selectedMenu: any;
  selectedMenuMeal: any;

  menuForm = this.formBuilder.group({
    choixPlat: ['', Validators.required],
    platFormuleChoix: ['', Validators.required],
    quantiteRepas: ['1', Validators.required]
  });

  constructor(private menuService: MenuService, private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.getMenusByDay();
  }

  getMenusByDay() {
    this.souscription = this.menuService.getMenusByDay()
      .subscribe(
        resp => {
          this.menus = resp;
          console.log(this.menus);
        }
      )
  };
  
  

  
}
