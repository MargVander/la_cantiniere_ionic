import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
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
  modalOptions: NgbModalOptions;
  private souscription: Subscription;
  public menus: any;
  selectedMenu: any;
  selectedMenuMeal: any;

  menuForm = this.formBuilder.group({
    choixPlat: ['', Validators.required],
    platFormuleChoix: ['', Validators.required],
    quantiteRepas: ['1', Validators.required]
  });

  constructor(private menuService: MenuService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      size: 'lg'
    }
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
  
  openLg(content, id) {
    this.souscription = this.menuService.getMenu(id)
    .subscribe(
      resp => {
        this.selectedMenu = resp;
        console.log(this.selectedMenu);
    console.log(this.selectedMenu.meals);
      }
    )    
    
    this.modalService.open(content, this.modalOptions).result.then((result) => { //ouvre une fenetre modal
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  compteur(x) {
    if (x = "a") {
      this.quantitePlat--;
    } if (x != "a") {
      this.quantitePlat++;
    }
  }

  onSubmit() {
    console.log('Form submitted !', this.menuForm.value);
    this.menuForm.reset();
  }

}
